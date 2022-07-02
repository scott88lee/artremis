const puppeteer = require('puppeteer');

(async () => {
  console.log('Function 1')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.thesaurus.com/browse/smart')

  console.log(await page.content());
  await browser.close();
})();

async function scrape() {
  console.log('Function 2')
  const browser = await puppeteer.launch({})
  const page = await browser.newPage()

  await page.goto('https://www.thesaurus.com/browse/smart')
  for (i = 1; i < 6; i++) {
    var element = await page.waitForSelector("#meanings > div.css-ixatld.e15rdun50 > ul > li:nth-child(" + i + ") > a")
    var text = await page.evaluate(element => element.textContent, element)
    console.log(text)
  }
  browser.close()
}
scrape()
