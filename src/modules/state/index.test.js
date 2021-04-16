const state = require("./");

test("setState", () => {
    expect(state.setState("setState", true)).toStrictEqual({ success: true });
});

test("getState", () => {
    state.setState("getState", true);

    expect(state.getState("getState")).toStrictEqual({ success: true, data: true });
});
