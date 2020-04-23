import cookieManager from '../src/cookie-manager';

beforeEach(() => {
  cookieManager.initialize('foo', {});
});

describe('CookieManager', () => {
  test('has no choice and decline cookies by default', () => {
    expect(cookieManager.hasMadeChoice()).toBe(false);
    expect(cookieManager.hasConsent()).toBe(false);
  });

  test('can approve cookie usage', () => {
    cookieManager.approve();

    expect(cookieManager.hasMadeChoice()).toBe(true);
    expect(cookieManager.hasConsent()).toBe(true);
  });

  test('can decline cookie usage', () => {
    cookieManager.decline();

    expect(cookieManager.hasMadeChoice()).toBe(true);
    expect(cookieManager.hasConsent()).toBe(false);
  });

  test('can reset consent choice', () => {
    cookieManager.approve();
    expect(cookieManager.hasMadeChoice()).toBe(true);
    expect(cookieManager.hasConsent()).toBe(true);

    cookieManager.resetConsent();
    expect(cookieManager.hasMadeChoice()).toBe(false);
    expect(cookieManager.hasConsent()).toBe(false);
  });
});
