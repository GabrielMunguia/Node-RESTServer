const pupperter = require('puppeteer');

const getProductoEbay =async(url)=>{

  try {
    const browser = await pupperter.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://www.ebay.de/itm/192590627146?_trkparms=%26rpp_cid%3D5ca1fa15f041412ce32f28d7%26rpp_icid%3D5ca1fa15f041412ce32f28d6&_trkparms=pageci%3A1f99c34a-fa6e-11ec-8bb5-2a40c401d1b2%7Cparentrq%3Ac1a3bd331810acb4ab62c8d5fffd9e22%7Ciid%3A1');
    const data = await page.evaluate(() => {
        const data = {
            title: document.querySelector("#LeftSummaryPanel > div.vi-swc-lsp > div:nth-child(1) > div > h1 > span").innerText,
            price: document.querySelector("#prcIsum").innerText,
            image: document.querySelector("#icImg").src,
            // description: document.querySelector('#video-description').innerText,
            // link: document.querySelector('#viewItemLink').href
        }
        return data;
    }
    )
    await browser.close();
  
    return data;

  } catch (error) {
    return {}
  }

}
module.exports = {
    getProductoEbay
}