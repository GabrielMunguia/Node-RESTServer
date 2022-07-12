const pupperter = require('puppeteer');

const getProductoEbay =async(url)=>{

  try {
    const browser = await pupperter.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url,{
      waitUntil: 'load',
      // Remove the timeout
      timeout: 0
    });
    const data = await page.evaluate(() => {
      let caracteristicasLabel= document.querySelectorAll("#viTabs_0_is .ux-layout-section-module .ux-labels-values__labels");
      const valoresCaracteristicas =document.querySelectorAll("#viTabs_0_is .ux-layout-section-module .ux-labels-values__values");
      let caracteristicas=[];
      for(let i=0;i<caracteristicasLabel.length;i++){

        caracteristicas.push({
          name:(caracteristicasLabel[i].innerText).replace(':',''),
          value:(valoresCaracteristicas[i].innerText),
        });
      }
        let price =  document.querySelector("#prcIsum")?.innerText;
     
     

        const data = {
            title: document.querySelector("#LeftSummaryPanel > div.vi-swc-lsp > div:nth-child(1) > div > h1").innerText,
            price:price,
            image: document.querySelector("#icImg")?.src,
            description: caracteristicas,

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