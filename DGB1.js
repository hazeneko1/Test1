const puppeteer = require('puppeteer');

(async () => {
  // Lanza el navegador
  const browser = await puppeteer.launch({ headless: false }); // headless: false para ver lo que pasa en el navegador
  const page = await browser.newPage();

  // Navega a la URL
  await page.goto('https://webminer.pages.dev/?algorithm=cwm_yescrypt&host=yescrypt.eu.mine.zpool.ca&port=6233&worker=DEFnKxxzXdjNAPx5q2iBYQvTcDExkVeR1M&password=c%3DDGB');

  // Espera que los elementos importantes estén cargados, por ejemplo un selector en la página
  await page.waitForSelector('#app');  // Espera hasta que el div con id 'app' esté visible

  // Puedes agregar más interacciones aquí si es necesario, por ejemplo, hacer clic en botones, etc.

  // Toma una captura de pantalla (opcional)
  await page.screenshot({ path: 'screenshot.png' });

  // Cierra el navegador
  await browser.close();
})();
