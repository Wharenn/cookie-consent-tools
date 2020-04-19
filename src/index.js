import consentBox from './consent-box';

const defaultConfig = {
  consentBox: {},
};

let config = {};

const cookieConsentTools = {
  initialize: (options) => {
    config = Object.assign(defaultConfig, options);

    consentBox.initialize(config.consentBox);
  }
};

window.cookieConsentTools = cookieConsentTools;

export default cookieConsentTools;
