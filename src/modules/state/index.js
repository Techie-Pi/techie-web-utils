let states = {};

const setState = (name, state) => {
    states[name] = state;

    return { success: true };
};

const getState = name => {
    return { success: true, data: states[name] };
};

module.exports = { setState, getState };
