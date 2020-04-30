/* eslint-disable */

var textZone = document.getElementById('textZone');
var write = function (message) {
  textZone.innerHTML = textZone.innerHTML + '<div>' + message + '</div>';
  textZone.scrollTop = textZone.scrollHeight;
}
var writeSeparator = function () {
  textZone.innerHTML = textZone.innerHTML + '<hr/>';
  textZone.scrollTop = textZone.scrollHeight;
}
var cct = window.cookieConsentTools;

var executeScript = function (options) {
  options.onConsentLoaded = function (hasConsent) {
    write('<span class="label blue">Listener onConsentLoaded</span> Has consent? ' + hasConsent);
    if (document.cookie) {
      write('<span class="label">Cookie Value</span> ' + document.cookie);
    } else {
      write('<span class="label">Cookie Value</span> <em>Empty</em>');
    }
  };
  options.onConsentUpdated = function (hasConsent) {
    write('<span class="label blue">Listener onConsentUpdated</span> Has consent? ' + hasConsent);
    if (document.cookie) {
      write('<span class="label">Cookie Value</span> ' + document.cookie);
    } else {
      write('<span class="label">Cookie Value</span> <em>Empty</em>');
    }
  };

  options.consentBox.onHide = function () { write('<span class="label blue">Listener consentBox.onHide</span> Box is hidden!') };
  options.consentBox.onShow = function () { write('<span class="label blue">Listener consentBox.onShow</span> Box is visible!') };
  options.consentBox.onApproveButtonClick = function () { 
    writeSeparator();
    write('User Action: Clicking on Approve Button');
    write('<span class="label blue">Listener consentBox.onApproveButtonClick</span> Clicked on Approve button!') 
  };
  options.consentBox.onDeclineButtonClick = function () { 
    writeSeparator();
    write('User Action: Clicking on Decline Button');
    write('<span class="label blue">Listener consentBox.onDeclineButtonClick</span> Clicked on Decline button!') 
  };
  options.consentBox.onOkButtonClick = function () { 
    writeSeparator();
    write('User Action: Clicking on Ok Button');
    write('<span class="label blue">Listener consentBox.onOkButtonClick</span> Clicked on Ok button!') 
  };

  cct.initialize(options);
};

var registerClickHandlerIfExists = function (idSelector, handler) {
  var element = document.getElementById(idSelector);

  if (!element) {
    return;
  }

  element.addEventListener('click', handler);
};

registerClickHandlerIfExists('show-box', function () {
  writeSeparator();
  write('User Action: Showing Box');
  cct.consentBox.show();
});
registerClickHandlerIfExists('hide-box', function () {
  writeSeparator();
  write('User Action: Hiding Box');
  cct.consentBox.hide();
});
registerClickHandlerIfExists('reset-button', function () {
  writeSeparator();
  write('User Action: Reseting consent');
  cct.cookieManager.resetConsent();
  //write('document.cookie = ' + document.cookie);
});
registerClickHandlerIfExists('approve-button', function () {
  writeSeparator();
  write('User Action: Giving consent');
  cct.cookieManager.approve();
  //write('document.cookie = ' + document.cookie);
});
registerClickHandlerIfExists('decline-button', function () {
  writeSeparator();
  write('User Action: Revoking consent');
  cct.cookieManager.decline();
  //write('document.cookie = ' + document.cookie);
});
registerClickHandlerIfExists('has-consent-button', function () {
  writeSeparator();
  write('Has consent? ' + (cct.cookieManager.hasConsent() ? 'Yes' : 'Nope'));
});
registerClickHandlerIfExists('has-choice-button', function () {
  writeSeparator();
  write('Has made choice? ' + (cct.cookieManager.hasMadeChoice() ? 'Yes' : 'Nope'));
});

