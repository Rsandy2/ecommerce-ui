import { Url } from "url";

// const puppeteer = require("puppeteer-core");

// let fetchData = async (link: any) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(link, {
//     waitUntil: "networkidle2",
//   });
//   // Get the "viewport" of the page, as reported by the page.
//   const dimensions = await page.evaluate(() => {
//     return {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight,
//       deviceScaleFactor: window.devicePixelRatio,
//     };
//   });

//   console.log("Dimensions:", dimensions);
//   await browser.close();
// };

// module.exports = {
//   fetchData,
// };

// export default fetchData;
