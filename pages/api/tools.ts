import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const fnc: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const url = req.body.url;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url);
    await page.waitForSelector("video");

    const videos = await page.evaluate(() =>
      Array.from(document.querySelectorAll("video"))
        .map((x) => x.getAttribute("data-vid"))
        .filter((x) => !!x)
        .map(x => x?.indexOf('https') === 0 ? x : `https://${x}`)
    );

    return res.json({ videos });
  } catch (e) {
    return res.json({ error: e });
  } finally {
    await browser.close();
  }
};

export default fnc;
