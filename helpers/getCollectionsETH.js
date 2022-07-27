const pupperter = require('puppeteer');

// add stealth plugin and use defaults (all evasion techniques)

const getCollectionsETH = async () => {
  try {
    const url = 'https://opensea.io/rankings?sortBy=one_day_volume&chain=ethereum';

    const browser = await pupperter.launch({
      headless: true,

      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--window-size=2560,5000',

        '--disable-gpu',
        '--no-first-run',
      ],
    });
    const page = await browser.newPage();
    page.setViewport({ width: 2560, height: 5000 });
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    );
    await page.goto(url, {
      waitUntil: 'load',
      // Remove the timeout
      timeout: 0,
      //esperar a que cargue la pagina
    });
    const data = await page.evaluate(async () => {
      //hacer scroll hasta el final de la pagina
      const lstHref = [];
      const pages = 5;
      for (let i = 0; i < pages; i++) {
        let lstLinks = document.querySelectorAll('a');
        for (let i = 0; i < lstLinks.length; i++) {
          lstHref.push(lstLinks[i].href);
        }
        const btnNext = document.querySelector(
          '#main > div > div.sc-1xf18x6-0.sc-1twd32i-0.kQIuPQ.kKpYwv > button.sc-1xf18x6-0.sc-glfma3-0.fxZIoN.gGmNLC'
        );
        btnNext.click();
        //dormir para que cargue la pagina
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }

      const lstSlugs = [];
      lstHref.forEach((href) => {
        const slug = href.split('https://opensea.io/collection/')[1];
        if (slug) {
          lstSlugs.push(slug);
        }
      });

      return lstSlugs;
    });
    await browser.close();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  getCollectionsETH,
};
