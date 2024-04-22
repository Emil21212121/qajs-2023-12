import { browser, expect, $ } from '@wdio/globals'
import { faker } from '@faker-js/faker';
import { setTimeout } from 'node:timers/promises'

const config = {
  rwa: {
    baseURL: 'https://vue3-realworld-example-app-mutoe.vercel.app',
    username: 'plumrx',
    email: 'foo@example.com',
    password: '12345678',
  }
}

const newUser = {
  name: faker.internet.displayName(),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 10 }),
}

describe('auth', () => {
  it('register', async () => {
    await browser.url(`${config.rwa.baseURL}/#/register`)
    await $('[placeholder="Your Name"]').setValue(newUser.name)
    await $('[placeholder="Email"]').setValue(newUser.email)
    await $('[placeholder="Password"]').setValue(newUser.password)
    // .submit()
    await $('button[type="submit"]').click()
    await expect(browser).toHaveUrl(`${config.rwa.baseURL}/#/`)
    await browser.url('https://vue3-realworld-example-app-mutoe.vercel.app/#/settings')
    await expect($('[placeholder="Your name"]').getValue()).toBe(newUser.name)
  })

  it('login', async () => {
    await browser.url(`${config.rwa.baseURL}/#/login`)
    // await $('[placeholder="Email"]').setValue(newUser.email)
    // await $('[placeholder="Password"]').setValue(newUser.password)
    // await $('button[type="submit"]').click()
    // await expect(browser).toHaveUrl(`${config.rwa.baseURL}/#/`)

    await browser.url('https://vue3-realworld-example-app-mutoe.vercel.app/#/settings')
    await browser.pause(1000)
    // .wait
    await setTimeout(10_000)
    // setTimeout(() => { }, 10_000)
    await expect($('[placeholder="Your name"]').getValue()).toBe(newUser.name)
  })
})
