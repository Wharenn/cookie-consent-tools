
const defaultOptions = {
  container: 'container',
  autoDisplay: true,
  messages: {
    title: 'Cookie Consent',
    message: 'This website uses cookies to provide you the best user experience.',
    seeMoreLabel: 'See more...',
    okButton: 'Got it',
    allowButton: 'Allow Cookies',
    declineButton: 'Decline'
  },
  type: 'message', // or 'choice'
  seeMoreLink: {
    href: '/cookie',
    target: '_blank'
  },
  onOkButtonClick: () => {}, 
  onAllowButtonClick: () => {},
  onDeclineButtonClick: () => {},
  onShow: () => {},
  onHide: () => {}
};

const buildBox = () => {
  if (document.getElementById('consent-box') !== null) {
    return;
  }

  const consentBox = document.createElement('div');
  consentBox.setAttribute('id', 'consent-box');

  const messageNode = document.createElement('span');
  messageNode.appendChild(document.createTextNode(options.messages.message + ' '));
  consentBox.appendChild(messageNode);

  if (options.messages.seeMoreLabel !== null) {
    const seeMoreLink = document.createElement('a');
    seeMoreLink.setAttribute('target', options.seeMoreLink.target);
    seeMoreLink.setAttribute('href', options.seeMoreLink.href);

    seeMoreLink.appendChild(document.createTextNode(options.messages.seeMoreLabel));
    consentBox.appendChild(seeMoreLink);
  }
  
  document.getElementById(options.container).appendChild(consentBox);
}

let options = {};

const consentBox = {
  initialize: function (config) {
    options = Object.assign(defaultOptions, config);

    if (options.autoDisplay && options.autoDisplay === true) {
      this.show();
    }
  },

  show: () => {
    buildBox();

    if (options.onShow) {
      options.onShow();
    }
  },

  hide: () => {
    if (options.onHide) {
      options.onHide();
    }
  },
};

export default consentBox;
