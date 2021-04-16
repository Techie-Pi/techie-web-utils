const events = require("./");

test("registerEvent", () => {
    expect(events.registerEvent("registerEvent")).toStrictEqual({ success: true });
});

test("registerListener", () => {
    const testFunction = jest.fn();

    events.registerEvent("registerListener");
    expect(events.registerListener("registerListener", testFunction)).toStrictEqual({ success: true, id: expect.anything() });
});

test("dispatchEvent", () => {
    const testFunction = jest.fn();

    events.registerEvent("dispatchEvent");

    events.registerListener("dispatchEvent", testFunction);
    events.dispatchEvent("dispatchEvent", { test: "test" });

    expect(testFunction).toHaveBeenCalled();
});

test("removeListener", () => {
    const testFunction = jest.fn();

    events.registerEvent("removeListener");

    const { id } = events.registerListener("removeListener", testFunction);
    events.removeListener("removeListener", id);
    events.dispatchEvent("removeListener", { test: "test" });

    expect(testFunction).not.toBeCalled();
});


