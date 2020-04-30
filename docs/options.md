# Options

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| [`cookieName`](#cookieName) | `String` | `"cct_choice"` | Name of the cookie used to store consent |
| [`cookieAttributes`](#cookieAttributes) | `Object` | [See defaults](#cookieAttributes) | Attributes of the cookie used to store consent |
| [`onConsentLoaded`](#onConsentLoaded) | `Function` | `undefined`  | Function called when consent status is loaded from user cookies |
| [`onConsentUpdated`](#onConsentUpdated) | `Function` | `undefined` | Function called when the user consent is updated |
| [`consentBox`](#consentBox) | `Object` | [See defaults](#consentBox) | Options of the consent box |

### `cookieName`

Type: `String`
Default: `"cct_choice"`

Name of the cookie used to store consent

### `cookieAttributes`
Type: `Object`

Defaults:
| Name | Type | Default |
| ---- | ---- | ------- |
| [`path`](#path) | `String` | `"/"` |
| [`domain`](#sameSite) | `String` | `undefined` |
| [`expires`](#expires) | `Int` | `365` |
| [`secure`](#secure) | `Boolean` | `false` |
| [`sameSite`](#sameSite) | `String` |`"strict"` |

Attributes of the cookie used to store consent. 
See [js-cookie documentation](https://github.com/js-cookie/js-cookie#cookie-attributes) for a full description of options.

### `onConsentLoaded`

Type: `Function`
Default: `undefined`

Function called when consent status is loaded from user cookies. The consent status is passed as a `Boolean` parameter.

```javascript
{
    onConsentLoaded: (hasConsent) => {
        if (hasConsent) {
            console.log('User said yes to cookies!');
        } else {
            console.log('User said no to cookies!');
        }
    }
}
```

### `onConsentUpdated`

Type: `Function`
Default: `undefined`

Function called when the user consent is updated. The consent status is passed as a `Boolean` parameter.

```javascript
{
    onConsentUpdated: (hasConsent) => {
        if (hasConsent) {
            console.log('User said yes to cookies!');
        } else {
            console.log('User said no to cookies!');
        }
    }
}
```

## `consentBox`
Type: `Object`

Defaults:

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| [`autoDisplay`](#autoDisplay) | `Boolean` | `true` | Display the consent box if no user choice has been made |
| [`container`](#container) | `String` | `"container"` | Id of the element the consent box will be appended |
| [`type`](#type) | `String` | `"message"` | Type of the consent box, a unique ok button or two approve/decline buttons |
| [`messages`](#messages) | `Object` | [See defaults](#messages) | Texts displayed inside the consent box |
| [`seeMoreLink`](#seeMoreLink) | `Object` | `{ href: null, target: "_self" }` | Additional link to the website cookie policy |
| [`onOkButtonClick`](#onOkButtonClick) | `Function` | `undefined` | Function called when the ok button is clicked (only on `message` type) |
| [`onApproveButtonClick`](#onApproveButtonClick) | `Function` | `undefined` | Function called when the approve button is clicked (only on `choice` type) |
| [`onDeclineButtonClick`](#onDeclineButtonClick) | `Function` | `undefined` | Function called when the decline button is clicked (only on `choice` type) |
| [`onShow`](#onShow) | `Function` | `undefined` | Function called when the box appears |
| [`onHide`](#onHide) | `Function` | `undefined` | Function called when the box disappears |

### `autoDisplay`

Type: `Boolean`
Default: `true`

Display the consent box if no user choice has been made. As the box DOM is built on first display, setting this option to `false` will be equivalent to not using the consent box at all. 

Consent Box can still be [manually displayed](./docs/consent-box.md) if required.

### `container`

Type: `String`
Default: `"container"`

Id of element in which the consent box will be appended upon build.

```html
<div id="container">
    ...
    <!-- Consent box will be appended at the end of the element -->
</div>
```

### `type`

Type: `String`
Default: `"message"`
Allowed values: `"message"|"choice"`

Consent box type which will make the number and label of buttons vary.

With `message` type:
![Message type](./images/consent-box-message.png)

With `choice` type:
![Choice type](./images/consent-box.png)

### `messages`

Type: `Object`
Default: 
```javascript
{
    message: 'This website uses cookies to provide you the best user experience.',
    seeMoreLabel: 'See more...',
    okButton: 'Got it',
    approveButton: 'Allow Cookies',
    declineButton: 'Decline',
}
```

Texts displayed inside the consent box

### `seeMoreLink`

Type: `Object`
Default: 
```javascript
{ 
    href: null, 
    target: "_self" 
}
```

Additional link to the website cookie policy. If `href` is set to `null`, no link will be displayed.

### `onOkButtonClick`

Type: `Function`
Default: `undefined`

Function called when the ok button is clicked (only on `message` type). This function is executed before the consent is actually updated.

### `onApproveButtonClick`

Type: `Function`
Default: `undefined`

Function called when the approve button is clicked (only on `choice` type). This function is executed before the consent is actually updated.

### `onDeclineButtonClick`

Type: `Function`
Default: `undefined`

Function called when the decline button is clicked (only on `choice` type). This function is executed before the consent is actually updated.

### `onShow`

Type: `Function`
Default: `undefined`

Function called when the box appears.

### `onHide`

Type: `Function`
Default: `undefined`

Function called when the box disappears.
