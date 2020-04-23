import boxBuilder from './box-builder';

const defaultOptions = {
  container: 'container',
  autoDisplay: true,
  messages: {
    message: 'This website uses cookies to provide you the best user experience.',
    seeMoreLabel: 'See more...',
    okButton: 'Got it',
    approveButton: 'Allow Cookies',
    declineButton: 'Decline',
  },
  type: 'message', // or 'choice'
  seeMoreLink: {
    href: null,
    target: '_self',
  },
  onOkButtonClick: () => {},
  onApproveButtonClick: () => {},
  onDeclineButtonClick: () => {},
  onShow: () => {},
  onHide: () => {},
};

let options = {};

const consentBox = {
  initialize(config) {
    options = Object.assign(options, defaultOptions, config);
    if (config && config.seeMoreLink) {
      options.seeMoreLink = Object.assign(defaultOptions.seeMoreLink, config.seeMoreLink);
    }
    if (config && config.messages) {
      options.messages = Object.assign(defaultOptions.messages, config.messages);
    }

    if (options.autoDisplay && options.autoDisplay === true) {
      this.show();
    }
  },

  show: () => {
    boxBuilder.build({
      options: consentBox.getOptions(),
      showFunction: consentBox.show,
      hideFunction: consentBox.hide,
    });

    boxBuilder.show();

    if (options.onShow) {
      options.onShow();
    }
  },

  hide: () => {
    boxBuilder.hide();

    if (options.onHide) {
      options.onHide();
    }
  },

  getOptions: () => {
    return options;
  },
};

export default consentBox;
