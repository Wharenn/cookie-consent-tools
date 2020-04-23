import Cookies from 'js-cookie';

let cookieName;
let cookieAttributes = {};

export default {
  initialize: (name, attributes) => {
    cookieName = name;
    cookieAttributes = attributes;
  },
  hasMadeChoice: () => {
    return Cookies.get(cookieName) !== undefined;
  },
  hasConsent: () => {
    return Cookies.get(cookieName) === 'approve';
  },
  resetConsent: () => {
    return Cookies.remove(cookieName, { path: cookieAttributes.path, domain: cookieAttributes.domain });
  },
  approve: () => {
    Cookies.set(cookieName, 'approve', cookieAttributes);
  },
  decline: () => {
    Cookies.set(cookieName, 'decline', cookieAttributes);
  },
};
