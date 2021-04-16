const i18n = require("./");

test("get testStrings in spanish", () => {
    expect(i18n.getString("testStrings", "es", {})).toStrictEqual({ success: true, data: "ES" });
});

test("get testStrings in english", () => {
    expect(i18n.getString("testStrings", "en", {})).toStrictEqual({ success: true, data: "EN" });
});

test("get non-existing testString", () => {
    expect(i18n.getString("testStrings", "-", {})).toStrictEqual({ success: false });
});

test("render testStrings", () => {
    expect(i18n.getString("testStrings", "render", { echo: "ping" })).toStrictEqual({ success: true, data: "ping pong" });
});


