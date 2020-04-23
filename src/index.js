import consentBox from './consent-box/consent-box';
import cookieManager from './cookie-manager';

const defaultConfig = {
  cookieName: 'cct_choice',
  cookieAttributes: {
    path: '/',
    expires: 365,
    secure: false,
    sameSite: 'strict',
  },
  consentBox: {},
};

let config = {};

const cookieConsentTools = {
  initialize: (options) => {
    config = Object.assign(config, defaultConfig, options);
    if (options && options.cookieAttributes) {
      config.cookieAttributes = Object.assign(defaultConfig.cookieAttributes, options.cookieAttributes);
    }

    cookieManager.initialize(config.cookieName, config.cookieAttributes);
    consentBox.initialize(config.consentBox);
  },

  consentBox,
  cookieManager,
};

window.cookieConsentTools = cookieConsentTools;

export default cookieConsentTools;
