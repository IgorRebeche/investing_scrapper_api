require('dotenv').config()
import puppeteer from 'puppeteer'
const snooze = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      height: 800,
      width: 1080,
    },
  })
  const page = await browser.newPage()

  await page.goto('https://br.investing.com/')
  await page.click('.login')

  await page.type('#loginFormUser_email', 'igorrebeche@gmail.com')
  await page.type('#loginForm_password', '')
  await page.click('#signup > a')

  await page.goto('https://br.investing.com/members-admin/alert-center')
  await snooze(5000)

  await page.type('#searchText_instAlertSearchPostfix', 'wege3')
  await snooze(5000)
  await page.click('#searchRowIdtop_0')
  await snooze(3000)
  await page.select(
    '#jsInstrument > div.openingForm.alertCenter.displayNone > div > fieldset:nth-child(2) > div > select',
    'Ficar Acima'
  )
  await page.type('#alertValuePrice', '20,23')

  await page.click(
    '#jsInstrument > div.openingForm.alertCenter.displayNone > div > div.btnDiv > a'
  )
}

run()
