let events = {};

const registerEvent = name => {
    events[name] = { listeners: [] };

    return { success: true };
};

const dispatchEvent = (event, data) => {
    try {
        events[event].listeners.forEach(listener => {
            listener.callback(data);
        });
        return { success: true };
    }
    catch(e) {
        return { success: false };
    }
};

const registerListener = (name, callback) => {
    const id = Math.round(Math.random() * 1000000000000);
    events[name].listeners.push({ id, callback });

    return { success: true, id: id };
};

const removeListener = (name, id) => {
    events[name].listeners.forEach(listener => {
        if(listener.id === id) {
            events[name].listeners.splice(events[name].listeners.indexOf(listener));
        }
    });

    return { success: true };
};

module.exports = { registerEvent, dispatchEvent, registerListener, removeListener };
