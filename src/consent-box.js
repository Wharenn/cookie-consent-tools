const defaultOptions = {
  container: 'container',
  autoDisplay: true,
  messages: {
    title: 'Cookie Consent',
    message: 'This website uses cookies to provide you the best user experience.',
    seeMoreLabel: 'See more...',
    okButton: 'Got it',
    approveButton: 'Allow Cookies',
    declineButton: 'Decline',
  },
  type: 'message', // or 'choice'
  seeMoreLink: {
    href: '/cookie',
    target: '_blank',
  },
  onOkButtonClick: () => {},
  onApproveButtonClick: () => {},
  onDeclineButtonClick: () => {},
  onShow: () => {},
  onHide: () => {},
};

const buildBox = (consentBox, options) => {
  if (document.getElementById('consent-box') !== null) {
    return;
  }

  const consentBoxElement = document.createElement('div');
  consentBoxElement.setAttribute('id', 'consent-box');

  const messageContainer = document.createElement('div');
  messageContainer.classList.add('messageContainer');

  const messageNode = document.createElement('span');
  messageNode.appendChild(document.createTextNode(`${options.messages.message} `));
  messageContainer.appendChild(messageNode);

  if (options.messages.seeMoreLabel !== null) {
    const seeMoreLink = document.createElement('a');
    seeMoreLink.setAttribute('target', options.seeMoreLink.target);
    seeMoreLink.setAttribute('href', options.seeMoreLink.href);

    seeMoreLink.appendChild(document.createTextNode(options.messages.seeMoreLabel));
    messageContainer.appendChild(seeMoreLink);
  }

  consentBoxElement.appendChild(messageContainer);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');

  if (options.type === 'choice') {
    const approveLink = document.createElement('a');
    approveLink.setAttribute('href', '#');
    approveLink.classList.add('consentButton');
    approveLink.addEventListener('click', options.onApproveButtonClick);
    approveLink.addEventListener('click', consentBox.hide);
    approveLink.appendChild(document.createTextNode(options.messages.approveButton));

    const declineLink = document.createElement('a');
    declineLink.setAttribute('href', '#');
    declineLink.classList.add('consentButton', 'decline');
    declineLink.addEventListener('click', options.onDeclineButtonClick);
    declineLink.addEventListener('click', consentBox.hide);
    declineLink.appendChild(document.createTextNode(options.messages.declineButton));

    buttonContainer.appendChild(declineLink);
    buttonContainer.appendChild(approveLink);
  } else {
    const okLink = document.createElement('a');
    okLink.setAttribute('href', '#');
    okLink.classList.add('consentButton');
    okLink.addEventListener('click', options.onOkButtonClick);
    okLink.addEventListener('click', consentBox.hide);
    okLink.appendChild(document.createTextNode(options.messages.okButton));

    buttonContainer.appendChild(okLink);
  }

  consentBoxElement.appendChild(buttonContainer);

  document.getElementById(options.container).appendChild(consentBoxElement);
};

const getBoxElement = () => {
  return document.getElementById('consent-box');
};

let options = {};

const consentBox = {
  initialize(config) {
    options = Object.assign(defaultOptions, config);

    if (options.autoDisplay && options.autoDisplay === true) {
      this.show();
    }
  },

  show: () => {
    buildBox(consentBox, options);
    getBoxElement().classList.remove('hidden');

    if (options.onShow) {
      options.onShow();
    }
  },

  hide: () => {
    getBoxElement().classList.add('hidden');

    if (options.onHide) {
      options.onHide();
    }
  },
};

export default consentBox;
