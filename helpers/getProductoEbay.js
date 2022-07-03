const pupperter = require('puppeteer');

const getProductoEbay =async(url)=>{

  try {
    const browser = await pupperter.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url);
    const data = await page.evaluate(() => {
        const data = {
            title: document.querySelector("#LeftSummaryPanel > div.vi-swc-lsp > div:nth-child(1) > div > h1").innerText,
            price: document.querySelector("#prcIsum")?.innerText,
            image: document.querySelector("#icImg")?.src,
            description: document.querySelector("#viTabs_0_is > div")?.innerHTML || "",
            // link: document.querySelector('#viewItemLink').href
        }
        return data;
    }
    )
    await browser.close();
  
    return data;

  } catch (error) {
    console.log(error.message);
    return {}
  }

}
module.exports = {
    getProductoEbay
}