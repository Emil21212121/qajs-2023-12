import { browser, expect, $ } from '@wdio/globals'

const ROUTES = {
  HOME: '#/',
  LOGIN: '#/login',
  REGISTER: '#/register',
  SETTINGS: '#/settings',
  ARTICLE: '#/article/article-title',
}

const config = {
  rwa: {
    baseURL: 'https://vue3-realworld-example-app-mutoe.vercel.app',
    username: 'plumrx',
    email: 'foo@example.com',
    password: '12345678',
  }
}

describe('auth', () => {
  beforeEach(() => {
    browser.mock('GET', /users/, { fixture: 'user.json' });
    browser.mock('GET', /tags/, { fixture: 'tags.json' });
    browser.mock('GET', /articles/, { fixture: 'articles.json' });
  });

  describe('login and logout', () => {
    it('should login success when submit a valid login form', async () => {
      browser.url(ROUTES.LOGIN);
      $('#email').setValue(config.rwa.email);
      $('#password').setValue(config.rwa.password);
      $('[type="submit"]').click();

      await expect(browser).toHaveUrl(/\/#\/$/);
    });

    it('should logout when click logout button', async () => {
      browser.url(ROUTES.LOGIN);
      $('#email').setValue(config.rwa.email);
      $('#password').setValue(config.rwa.password);
      $('[type="submit"]').click();

      $('[href="' + ROUTES.SETTINGS + '"]').click();
      $('[button=logout]').click();

      await expect($('ul.navbar-nav')).toHaveTextContaining('Sign in');
      await expect($('ul.navbar-nav')).toHaveTextContaining('Sign up');
    });

    it('should display error when submit an invalid form (password not match)', () => {
      browser.mock('POST', /users\/login/, {
        statusCode: 403,
        body: { errors: { 'email or password': ['is invalid'] } },
      });
      browser.url(ROUTES.LOGIN);

      $('[type="email"]').setValue('foo@example.com');
      $('[type="password"]').setValue('12345678');
      $('[type="submit"]').click();

      expect(browser).toHaveText('email or password is invalid');
    });

    it('should display format error without API call when submit an invalid format', () => {
      browser.mock('POST', /users\/login/);
      browser.url(ROUTES.LOGIN);

      $('[type="email"]').setValue('foo');
      $('[type="password"]').setValue('123456');
      $('[type="submit"]').click();

      expect($('[type="submit"]').isClickable()).toBe(false);
    });

    it('should not allow visiting login page when the user is logged in', () => {
      browser.url(ROUTES.LOGIN);
      $('#email').setValue(config.rwa.email);
      $('#password').setValue(config.rwa.password);
      $('[type="submit"]').click();

      browser.url(ROUTES.LOGIN);
      expect(browser).toHaveUrl(/\/#\/$/);
    });

    it('should has credential header after login success', () => {
      browser.url(ROUTES.LOGIN);
      $('#email').setValue(config.rwa.email);
      $('#password').setValue(config.rwa.password);
      $('[type="submit"]').click();

      browser.url(ROUTES.SETTINGS);
      browser.mock('PUT', /user/);

      $('[role="textbox"][name="Username"]').setValue('foo');
      $('[role="button"][name="Update Settings"]').click();

      expect(browser).toHaveUrl(ROUTES.SETTINGS);
      expect(browser).toHaveHeader('authorization');
    });
  });

  describe('register', () => {
    it('should call register API and jump to home page when submit a valid form', () => {
      browser.mock('POST', /users$/, { fixture: 'user.json' });
      browser.url(ROUTES.REGISTER);

      $('[placeholder="Your Name"]').setValue('foo');
      $('[placeholder="Email"]').setValue('foo@example.com');
      $('[placeholder="Password"]').setValue('12345678');

      $('[type="submit"]').click();

      expect(browser).toHaveUrl(/\/#\/$/);
    });

    it('should display error message when submit the form that username already exist', () => {
      browser.mock('POST', /users$/, {
        statusCode: 422,
        body: {
          errors: {
            email: ['has already been taken'],
            username: ['has already been taken'],
          },
        },
      });

      browser.url(ROUTES.REGISTER);

      $('[placeholder="Your Name"]').setValue('foo');
      $('[placeholder="Email"]').setValue('foo@example.com');
      $('[placeholder="Password"]').setValue('12345678');

      $('[type="submit"]').click();

      expect(browser).toHaveText('email has already been taken');
      expect(browser).toHaveText('username has already been taken');
    });

    it('should not allow visiting register page when the user is logged in', () => {
      browser.url(ROUTES.LOGIN);
      $('#email').setValue(config.rwa.email);
      $('#password').setValue(config.rwa.password);
      $('[type="submit"]').click();

      browser.url(ROUTES.REGISTER);

      expect(browser).toHaveUrl(/\/#\/$/);
    });
  });
});
