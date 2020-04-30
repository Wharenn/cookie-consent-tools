# Cookie Manager API

Cookie Manager API provides methods to interact with the user consent.

### `hasMadeChoice()`

Return: `Boolean`

Returns if the user has made a choice about the consent.

### `hasConsent()`

Return: `Boolean`

Returns if the user has given its approval to use cookies. If no choice has been made, it is considered as a decline and `hasConsent()` will return `false`.

### `resetConsent()`

Reset the user choice and remove the choice cookie.

### `approve()`

Trigger the approval of the user. This method will create the cookie to store the consent status if it does not exists.

### `decline()`

Trigger the decline of the user. This method will create the cookie to store the consent status if it does not exists.

### `addEventListener(event, handler)`

Register a listener for a given cookie manager event.

| Name | Type | Description |
| ---- | ---- | ----------- |
| `event` | `String` | The event the listener will be trigger on. |
| `handler` | `Function` | The listener to call. The consent will be passed in the first parameter as a `Boolean` value. |

Available events:
 * `loaded` event is triggered when the cookie manager initiate itself and load the user consent from the cookie. 
 * `updated` event is triggered when the consent is updated. |

Handler example:
```javascript
cookieManager.addEventListener('updated', (hasConsent) => {
    if (hasConsent) {
        console.log('User said yes to cookies!');
    } else {
        console.log('User said no to cookies!');
    }
});
```
