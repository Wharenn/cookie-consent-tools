# Consent Box API

Cookie Box API provides methods to interact with the visual consent box.

Cookie Box is accessible as an object. **Be sure to initialize the tools first.**
```javascript
import cct as 'cookie-consent-tools';

cct.initialize({...});

const consentBox = cct.consentBox;
```

### `show()`

Show the consent box. If this is the first display, the box will be built and appened to the container.

### `hide()`

Hide the consent box.
