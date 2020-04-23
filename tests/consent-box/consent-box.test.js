import consentBox from '../../src/consent-box/consent-box';

beforeEach(() => {
  document.body.innerHTML = '<div id="container"></div>';
});

describe('ConsentBox', () => {
  test('with default config is visible in the expected container, without see more link, and in message mode', () => {
    consentBox.initialize();

    expect(consentBox.getOptions().autoDisplay).toBeTruthy();
    expect(consentBox.getOptions().type).toBe('message');
    expect(document.getElementById('container')).toMatchSnapshot();
  });

  test('can have a see more link', () => {
    consentBox.initialize({
      seeMoreLink: {
        href: 'https://foo.bar',
        target: '_blank',
      },
    });

    expect(document.getElementById('container')).toMatchSnapshot();
  });

  test('can have a customized see more link', () => {
    consentBox.initialize({
      messages: {
        seeMoreLabel: 'Show me more!',
      },
      seeMoreLink: {
        href: '#',
        target: '_self',
      },
    });

    expect(consentBox.getOptions().messages).toStrictEqual({
      seeMoreLabel: 'Show me more!',
      message: 'This website uses cookies to provide you the best user experience.',
      okButton: 'Got it',
      approveButton: 'Allow Cookies',
      declineButton: 'Decline',
    });
    expect(document.getElementById('container')).toMatchSnapshot();
  });

  test('can have customized messages', () => {
    consentBox.initialize({
      messages: {
        message: 'There is tasty cookies for you.',
        okButton: 'Ok, close it',
        seeMoreLabel: 'Show me more!',
      },
      seeMoreLink: {
        href: '#',
        target: '_self',
      },
    });

    expect(document.getElementById('container')).toMatchSnapshot();
  });

  test('can be set in choice mode', () => {
    expect(consentBox.getOptions().type).toBe('message');

    consentBox.initialize({
      type: 'choice',
    });

    expect(document.getElementById('container')).toMatchSnapshot();
  });

  test('can have customized choice button messages', () => {
    consentBox.initialize({
      messages: {
        approveButton: 'I approve',
        declineButton: 'I decline',
      },
    });

    expect(document.getElementById('container')).toMatchSnapshot();
  });

  test('can have onShow hook', () => {
    const hookFunction = jest.fn();
    consentBox.initialize({
      onShow: hookFunction,
    });

    expect(hookFunction).toHaveBeenCalled();
  });

  test('can have onHide hook', () => {
    const hookFunction = jest.fn();
    consentBox.initialize({
      onHide: hookFunction,
    });

    consentBox.hide();

    expect(hookFunction).toHaveBeenCalled();
  });

  test('can have onOkButtonClick hook', () => {
    const hookFunction = jest.fn();
    consentBox.initialize({
      onOkButtonClick: hookFunction,
    });

    document.querySelector('#consent-box .consentButton.ok').click();

    expect(hookFunction).toHaveBeenCalled();
  });

  test('can have onApproveButtonClick hook', () => {
    const hookFunction = jest.fn();
    consentBox.initialize({
      type: 'choice',
      onApproveButtonClick: hookFunction,
    });

    document.querySelector('#consent-box .consentButton.approve').click();

    expect(hookFunction).toHaveBeenCalled();
  });

  test('can have onDeclineButtonClick hook', () => {
    const hookFunction = jest.fn();
    consentBox.initialize({
      type: 'choice',
      onDeclineButtonClick: hookFunction,
    });

    document.querySelector('#consent-box .consentButton.decline').click();

    expect(hookFunction).toHaveBeenCalled();
  });
});
