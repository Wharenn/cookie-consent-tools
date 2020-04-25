import Cookies from 'js-cookie';
import cookieManager from '../src/cookie-manager';

describe('CookieManager', () => {
  test('has no choice and decline cookies by default', () => {
    const onLoadedMock = jest.fn();
    const onUpdatedMock = jest.fn();

    cookieManager.initialize({
      cookieName: 'foo1',
      onConsentLoaded: onLoadedMock,
      onConsentUpdated: onUpdatedMock,
    });

    expect(cookieManager.hasMadeChoice()).toBe(false);
    expect(cookieManager.hasConsent()).toBe(false);

    expect(onLoadedMock.mock.calls.length).toBe(1);
    expect(onLoadedMock.mock.calls[0][0]).toBe(false);

    expect(onUpdatedMock.mock.calls.length).toBe(0);
  });

  test('can approve cookie usage', () => {
    const onUpdatedMock = jest.fn();

    cookieManager.initialize({
      cookieName: 'foo2',
      onConsentUpdated: onUpdatedMock,
    });

    cookieManager.approve();

    expect(onUpdatedMock.mock.calls.length).toBe(1);
    expect(onUpdatedMock.mock.calls[0][0]).toBe(true);

    expect(cookieManager.hasMadeChoice()).toBe(true);
    expect(cookieManager.hasConsent()).toBe(true);
  });

  test('can decline cookie usage', () => {
    const onUpdatedMock = jest.fn();

    cookieManager.initialize({
      cookieName: 'foo3',
      onConsentUpdated: onUpdatedMock,
    });

    cookieManager.decline();

    expect(onUpdatedMock.mock.calls.length).toBe(1);
    expect(onUpdatedMock.mock.calls[0][0]).toBe(false);

    expect(cookieManager.hasMadeChoice()).toBe(true);
    expect(cookieManager.hasConsent()).toBe(false);
  });

  test('can reset consent choice', () => {
    const onUpdatedMock = jest.fn();

    cookieManager.initialize({
      cookieName: 'foo4',
      onConsentUpdated: onUpdatedMock,
    });

    cookieManager.approve();
    expect(cookieManager.hasMadeChoice()).toBe(true);
    expect(cookieManager.hasConsent()).toBe(true);

    cookieManager.resetConsent();
    expect(cookieManager.hasMadeChoice()).toBe(false);
    expect(cookieManager.hasConsent()).toBe(false);

    expect(onUpdatedMock.mock.calls.length).toBe(2);
    expect(onUpdatedMock.mock.calls[0][0]).toBe(true);
    expect(onUpdatedMock.mock.calls[1][0]).toBe(false);
  });

  test('can register updated event listeners', () => {
    const onUpdatedMock = jest.fn();
    const onUpdatedMock2 = jest.fn();
    const onUpdatedMock3 = jest.fn();

    cookieManager.initialize({
      cookieName: 'foo5',
      onConsentUpdated: onUpdatedMock,
    });
    cookieManager.addEventListener('updated', onUpdatedMock2);
    cookieManager.addEventListener('updated', onUpdatedMock3);

    cookieManager.approve();

    expect(onUpdatedMock.mock.calls.length).toBe(1);
    expect(onUpdatedMock.mock.calls[0][0]).toBe(true);
    expect(onUpdatedMock2.mock.calls.length).toBe(1);
    expect(onUpdatedMock2.mock.calls[0][0]).toBe(true);
    expect(onUpdatedMock3.mock.calls.length).toBe(1);
    expect(onUpdatedMock3.mock.calls[0][0]).toBe(true);

    expect(cookieManager.hasMadeChoice()).toBe(true);
    expect(cookieManager.hasConsent()).toBe(true);
  });

  test('can register loaded event listeners', () => {
    const onLoadedMock = jest.fn();
    const onLoadedMock2 = jest.fn();
    const onLoadedMock3 = jest.fn();

    cookieManager.addEventListener('loaded', onLoadedMock2);
    cookieManager.addEventListener('loaded', onLoadedMock3);
    cookieManager.initialize({
      cookieName: 'foo6',
      onConsentLoaded: onLoadedMock,
    });

    expect(onLoadedMock.mock.calls.length).toBe(1);
    expect(onLoadedMock.mock.calls[0][0]).toBe(false);
    expect(onLoadedMock2.mock.calls.length).toBe(1);
    expect(onLoadedMock2.mock.calls[0][0]).toBe(false);
    expect(onLoadedMock3.mock.calls.length).toBe(1);
    expect(onLoadedMock3.mock.calls[0][0]).toBe(false);
  });

  test('triggers loaded event with value dependent on cookie value (null)', () => {
    const onLoadedMock = jest.fn();

    Cookies.set('foo6', null);

    cookieManager.initialize({
      cookieName: 'foo6',
      onConsentLoaded: onLoadedMock,
    });

    expect(onLoadedMock.mock.calls.length).toBe(1);
    expect(onLoadedMock.mock.calls[0][0]).toBe(false);
  });

  test('triggers loaded event with value dependent on cookie value (false)', () => {
    const onLoadedMock = jest.fn();

    Cookies.set('foo7', 'decline');

    cookieManager.initialize({
      cookieName: 'foo7',
      onConsentLoaded: onLoadedMock,
    });

    expect(onLoadedMock.mock.calls.length).toBe(1);
    expect(onLoadedMock.mock.calls[0][0]).toBe(false);
  });

  test('triggers loaded event with value dependent on cookie value (true)', () => {
    const onLoadedMock = jest.fn();

    Cookies.set('foo8', 'approve');

    cookieManager.initialize({
      cookieName: 'foo8',
      onConsentLoaded: onLoadedMock,
    });

    expect(onLoadedMock.mock.calls.length).toBe(1);
    expect(onLoadedMock.mock.calls[0][0]).toBe(true);
  });
});
