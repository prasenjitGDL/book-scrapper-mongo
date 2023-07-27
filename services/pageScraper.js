const scraperObject = {
  url: "https://www.vestiairecollective.com/",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    // Navigate to the selected page
    await page.goto(this.url);
    async function scrapePage() {
        await page.waitForSelector('.innerContainer');
        let urls = await page.$$eval('ul > li', links => {
         
            links = links.map(el => el.querySelector('li a').href || "")
            return links;
        });
        // console.log('urls', urls)
        return urls
    }
    let list = await scrapePage();
    return {siteName: this.url, urls: list};
  },
};

export default scraperObject;
