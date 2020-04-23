const getBoxElement = () => {
  return document.getElementById('consent-box');
};

const isBuilt = () => {
  return getBoxElement() !== null;
};

const show = () => {
  getBoxElement().classList.remove('hidden');
};

const hide = () => {
  getBoxElement().classList.add('hidden');
};

const createButton = (text, onClick) => {
  const button = document.createElement('a');
  button.setAttribute('href', '#');
  button.classList.add('consentButton');
  button.addEventListener('click', onClick);
  button.appendChild(document.createTextNode(text));

  return button;
};

const build = (config) => {
  if (isBuilt()) {
    return;
  }

  const { options, hideFunction } = config;

  const consentBoxElement = document.createElement('div');
  consentBoxElement.setAttribute('id', 'consent-box');

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('messageContainer');

  const messageNode = document.createElement('span');
  messageNode.appendChild(document.createTextNode(`${options.messages.message} `));
  messageContainer.appendChild(messageNode);

  if (options.seeMoreLink && options.seeMoreLink.href) {
    const seeMoreLink = document.createElement('a');
    seeMoreLink.setAttribute('target', options.seeMoreLink.target);
    seeMoreLink.setAttribute('href', options.seeMoreLink.href);

    seeMoreLink.appendChild(document.createTextNode(options.messages.seeMoreLabel));
    messageContainer.appendChild(seeMoreLink);
  }

  consentBoxElement.appendChild(messageContainer);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');

  const buttons = [];
  if (options.type === 'choice') {
    const approveButton = createButton(options.messages.approveButton, hideFunction);
    approveButton.classList.add('approve');
    approveButton.addEventListener('click', options.onApproveButtonClick);

    const declineButton = createButton(options.messages.declineButton, hideFunction);
    declineButton.classList.add('decline');
    declineButton.addEventListener('click', options.onDeclineButtonClick);

    buttons.push(declineButton);
    buttons.push(approveButton);
  } else {
    const okButton = createButton(options.messages.okButton, hideFunction);
    okButton.classList.add('ok');
    okButton.addEventListener('click', options.onOkButtonClick);

    buttons.push(okButton);
  }
  buttonContainer.append(...buttons);
  consentBoxElement.appendChild(buttonContainer);

  document.getElementById(options.container).appendChild(consentBoxElement);
};

export default {
  build,
  isBuilt,
  hide,
  show,
};
