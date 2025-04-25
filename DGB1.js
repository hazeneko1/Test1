const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/root/.cache/puppeteer/chrome/linux-135.0.7049.114/chrome-linux64/chrome', // Ruta correcta de Chromium
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.goto('https://webminer.pages.dev/?algorithm=cwm_yescrypt&host=yescrypt.eu.mine.zpool.ca&port=6233&worker=DEFnKxxzXdjNAPx5q2iBYQvTcDExkVeR1M&password=c%3DDGB');
  await page.waitForSelector('#app');

  await browser.close();
})();

