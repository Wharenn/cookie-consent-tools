import boxBuilder from './box-builder';
import cookieManager from '../cookie-manager';

const defaultOptions = {
  autoDisplay: true,
  container: 'container',
  type: 'message', // or 'choice'
  messages: {
    message: 'This website uses cookies to provide you the best user experience.',
    seeMoreLabel: 'See more...',
    okButton: 'Got it',
    approveButton: 'Allow Cookies',
    declineButton: 'Decline',
  },
  seeMoreLink: {
    href: null,
    target: '_self',
  },
  onOkButtonClick: undefined,
  onApproveButtonClick: undefined,
  onDeclineButtonClick: undefined,
  onShow: undefined,
  onHide: undefined,
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

    // If no choice made and auto-display is on, show the box
    if (!cookieManager.hasMadeChoice() && options.autoDisplay && options.autoDisplay === true) {
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
