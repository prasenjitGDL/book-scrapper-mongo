import pageScraper from  "./pageScraper.js"
// const pageScraper = require('./pageScraper').default;
import ScraperModel from "./../models/scraper.js"

async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		const scrapedData = await pageScraper.scraper(browser);
		console.log("scrapedData",scrapedData)
		await ScraperModel.create(scrapedData);
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}
export const scraperController = (browserInstance) => scrapeAll(browserInstance)