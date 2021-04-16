const Mustache = require("mustache");
const translations = require("../../../config/translations.json");

const getString = (string, language, renderData) => {
    const translation = translations[string][language];

    if(translation != null) {
        const renderedTranslation = Mustache.render(translation, renderData);

        return { success: true, data: renderedTranslation };
    }
    else {
        return { success: false };
    }
};

module.exports = { getString };
