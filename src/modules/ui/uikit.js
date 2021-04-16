const addAlert = (title, message, type) => {
    const alert = document.createElement("div");
    alert.setAttribute("uk-alert", "");
    alert.className = `uk-alert-${type} uk-margin uk-animation-slide-top`;

    const closeButton = document.createElement("a");
    closeButton.setAttribute("uk-close", null);
    closeButton.className = "uk-alert-close";

    const titleH3 = document.createElement("h3");
    titleH3.innerHTML = title;

    const textP = document.createElement("p");
    textP.innerHTML = message;

    alert.appendChild(closeButton);
    alert.appendChild(titleH3);
    alert.appendChild(textP);

    document.body.prepend(alert);

    return alert;
};

const addModal = (title, message) => {
    const modal = document.createElement("div");
    modal.setAttribute("uk-modal", "");

    const modalBody = document.createElement("div");
    modalBody.className = "uk-modal-dialog uk-modal-body";

    const modalTitle = document.createElement("h2");
    modalTitle.className = "uk-modal-title";
    modalTitle.innerText = title;

    const modalContent = document.createElement("p");
    modalContent.innerText = message;

    modalBody.append(modalTitle, modalContent);
    modal.append(modalBody);

    document.body.prepend(modal);

    // eslint-disable-next-line no-undef
    UIkit.modal(modal).show();
    // eslint-disable-next-line no-undef
    UIkit.util.on(modal, "beforehide", e => {
        e.preventDefault();
    });

    return modal;
};

export { addAlert, addModal };
