const { config, modules } = require("../../../config/env.json");
const console = require("../logger");

const { getString: i18n } = require("../i18n");

const uikit = require("./uikit");

const language = window.navigator.language.substring(0, 2);

const addAlert = (title, message, type) => {
    switch(config.uiLib) {
    case "uikit":
        return { success: true, data: uikit.addAlert(title, message, type) };
    default:
        return _error();
    }
};

const addModal = (title, message) => {
    switch(config.uiLib) {
    case "uikit":
        return { success: true, data: uikit.addModal(title, message) };
    default:
        return _error();
    }
};

const _error = () => {
    console.error(modules.ui, `Unknown uiLib received at addAlert: ${config.uiLib}`);
    console.log(modules.ui, "Will use vanilla replacement with alert() and replace()");

    alert(i18n("genericError", language, {}));
    return { success: false };
};

module.exports = { addAlert, addModal };
