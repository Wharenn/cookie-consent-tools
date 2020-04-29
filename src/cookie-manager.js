import Cookies from 'js-cookie';

let cookieName;
let cookieAttributes = {};
const eventListeners = {
  loaded: [],
  updated: [],
};

const triggerEvent = (event, consent) => {
  eventListeners[event].forEach((handler) => handler(consent === 'approve'));
};

const getCookieValue = (name) => {
  const value = Cookies.get(name);

  if (value === undefined) {
    return null;
  }

  return value;
};

export default {
  initialize(config) {
    cookieName = config.cookieName || 'cct_choice';
    cookieAttributes = config.cookieAttributes || {};

    if (config.onConsentLoaded) {
      this.addEventListener('loaded', config.onConsentLoaded);
    }
    if (config.onConsentUpdated) {
      this.addEventListener('updated', config.onConsentUpdated);
    }

    triggerEvent('loaded', getCookieValue(cookieName));
  },
  hasMadeChoice: () => {
    return Cookies.get(cookieName) !== undefined;
  },
  hasConsent: () => {
    return Cookies.get(cookieName) === 'approve';
  },
  resetConsent: () => {
    const { path, domain } = cookieAttributes;

    Cookies.remove(cookieName, { path: path || '/', domain });

    triggerEvent('updated', null);
  },
  approve: () => {
    Cookies.set(cookieName, 'approve', cookieAttributes);

    triggerEvent('updated', 'approve');
  },
  decline: () => {
    Cookies.set(cookieName, 'decline', cookieAttributes);

    triggerEvent('updated', 'decline');
  },
  addEventListener: (event, handler) => {
    if (!eventListeners[event]) {
      return;
    }

    eventListeners[event].push(handler);
  },
};
