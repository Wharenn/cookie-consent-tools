# Cookie Consent Tools

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/com/Wharenn/cookie-consent-tools/master.svg?style=flat-square)](https://travis-ci.com/Wharenn/cookie-consent-tools)
![Coveralls github](https://img.shields.io/coveralls/github/Wharenn/cookie-consent-tools)

Set of tools to help implement user cookie consent. [See the demo](https://wharenn.github.io/cookie-consent-tools/docs/demo/index.html)

It provides:
* a `CookieManager` module to handle user consent persistence
* an optional mobile-friendly `ConsentBox` displayed to the user to give him choice. 

![Consent Box choice](./docs/images/consent-box.png)

## Usage

```javascript
// Import as a Module
import cookieConsentTools from 'cookie-consent-tools';

// Or get it through the window object
var cookieConsentTools = window.cookieConsentTool;

// Initialization will look for an existing consent in the cookies
cookieConsentTools.initialize(options);
```

## Options

```javascript
var options = {
  cookieName: 'cct_choice',
  cookieAttributes: {
    path: '/',
    expires: 365,
    secure: false,
    sameSite: 'strict',
  },
  onConsentLoaded: undefined,
  onConsentUpdated: undefined,
  consentBox: {
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
  }
});
```

See the [options documentation](./docs/options.md) to have more details about how to use them.

## API

Cookie consent tools can be manually managed using methods. See [Cookie Manager documentation](./docs/cookie-manager.md) or [Consent Box documentation](./docs/consent-box.md) to have more details.

## Roadmap
This project has to stay light, but some enhancements might be worse the case:

* Theming support for the Consent Box
* Splitting the consent into smaller parts to give the user and the developper more flexibility (ad cookies consent, stats cookies consent, etc.)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](./LICENSE.md)

## Project status

This project is a side project I created to handle user cookie consent on multiple websites I own. After looking to the existing projects on GitHub, I did not find one which was light, easy to use and detached from companies who where making GDPR compliance their business.

It is honestly the first open-source project I started on my own, and it was the opportunity for me to discover and implement all tools and processes which guarantee quality and support on this kind of project. 

Feel free to contribute and share ideas!
