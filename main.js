const axios = require('axios');
const cheerio = require('cheerio');

const targetUrl = '';

axios.get(targetUrl)
  .then((response) => {
    const html = response.data;
    console.log(html);
    const $ = cheerio.load(html);
    console.log($);
  })
  .catch(console.error);