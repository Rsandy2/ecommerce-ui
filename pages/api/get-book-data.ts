// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const chromium = require("chrome-aws-lambda");

type Data = {
  url: string;
  status: any;
};

async function getBrowserInstance() {
  const executablePath = await chromium.executablePath;

  if (!executablePath) {
    // running locally
    const puppeteer = require("puppeteer");
    return puppeteer.launch({
      args: chromium.args,
      headless: true,
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      ignoreHTTPSErrors: true,
    });
  }

  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = req.body.url;

  let browser = null;

  try {
    browser = await getBrowserInstance();
    const page = await browser.newPage();
    console.log("this is " + url);
    await page.goto(req.body.url);
    await page.screenshot({ path: "example.png" });
    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio,
      };
    });
    res.status(200).json({ url: req.body, status: "Sucess" });
  } catch (error) {
    console.log(error);
    res.json({
      url: url,
      status: error,
    });
    // return callback(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}
