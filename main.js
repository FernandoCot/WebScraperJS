const puppeteer = require('puppeteer');

const action = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com.br');

    // It saves the given url pictures as a pdf file
    await page.pdf({ path: './docTest.pdf', format: 'a4' });

    // It takes a screenshot of the page and save in the given path
    await page.screenshot({ path: './imgTest.png' });

    // It finds all the 'div' tags, counts them and returns the total
    const divsCounter = await page.$$eval('div', (divs) => divs.length);
    console.log(divsCounter);

    // It returns the text inside the last tag 'div' found
    const lastDivText = await page.$$eval('div', (divs) => divs[divs.length-1].textContent);
    console.log(lastDivText);

    // It returns the content inside the first tag 'div' found
    const firstDivContent = await page.$$eval('div', (divs) => divs[0].innerHTML);
    console.log(firstDivContent);

    // It closes the browser connection (by default it uses a background chromium installation)
    await browser.close();
  }
  catch (error) {
    console.log('It crashed!');
    console.log(error);
  }
};

action();
