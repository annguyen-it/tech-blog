import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const minimalArgs = [
  "--autoplay-policy=user-gesture-required",
  "--disable-background-networking",
  "--disable-background-timer-throttling",
  "--disable-backgrounding-occluded-windows",
  "--disable-breakpad",
  "--disable-client-side-phishing-detection",
  "--disable-component-update",
  "--disable-default-apps",
  "--disable-dev-shm-usage",
  "--disable-domain-reliability",
  "--disable-extensions",
  "--disable-features=AudioServiceOutOfProcess",
  "--disable-hang-monitor",
  "--disable-ipc-flooding-protection",
  "--disable-notifications",
  "--disable-offer-store-unmasked-wallet-cards",
  "--disable-popup-blocking",
  "--disable-print-preview",
  "--disable-prompt-on-repost",
  "--disable-renderer-backgrounding",
  "--disable-setuid-sandbox",
  "--disable-speech-api",
  "--disable-sync",
  "--hide-scrollbars",
  "--ignore-gpu-blacklist",
  "--metrics-recording-only",
  "--mute-audio",
  "--no-default-browser-check",
  "--no-first-run",
  "--no-pings",
  "--no-sandbox",
  "--no-zygote",
  "--password-store=basic",
  "--use-gl=swiftshader",
  "--use-mock-keychain",
];
const blockedDomains = [
  "admicro.vn",
  "adservice.google.com",
  "advividnetwork.com",
  "amcdn.vn",
  "anymind360.com",
  "apis.google.com",
  "cdn.adbro.me",
  "cloudfront.net",
  "contineljs.com",
  "dable.io",
  "data:image/",
  "deqik.com",
  "facebook.com",
  "facebook.net",
  "fundingchoicesmessages.google.com",
  "google-analytics.com",
  "google.com",
  "googlesyndication.com",
  "googletagmanager",
  "googletagservices.com",
  "gstatic.com",
  "https://static.thanhnien.vn/v4/web/js/analytics",
  "https://static.thanhnien.vn/v4/web/js/detail",
  "image.thanhnien.vn",
  "innity.com",
  "innity.net",
  "logging.admicro.vn",
  "onthe.io",
  "player.sohatv.vn",
  "quangcao.thanhnien.vn",
  "scorecardresearch.com",
  "sourcetobin.com",
  "static.thanhnien.vn/v4/web/js/pns/",
  "static.thanhnien.vn/v4/web/js/raty",
  "static.thanhnien.vn/v4/web/styles",
  "thanhnien.mediacdn.vn",
  "thanhnien.vn/ads",
  "zalo.me",
];
const blockedTypes = ["stylesheet", "font", "xhr"];

const fnc: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const url = req.body.url;
  const browser = await puppeteer.launch({
    headless: true,
    args: minimalArgs,
  });
  const page = await browser.newPage();

  try {
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      const url = request.url();
      const resourceType = request.resourceType();
      // console.log(request.resourceType());
      if (
        blockedDomains.some((domain) => url.includes(domain)) ||
        blockedTypes.includes(resourceType)
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });

    await page.goto(url);
    await page.waitForSelector("video");

    const videos = await page.evaluate(() =>
      Array.from(document.querySelectorAll("video"))
        .map((x) => x.getAttribute("data-vid"))
        .filter((x) => !!x)
        .map((x) => (x?.indexOf("https") === 0 ? x : `https://${x}`))
    );

    return res.json({ videos, error: null });
  } catch (e) {
    return res.json({ videos: [], error: e });
  } finally {
    await browser.close();
  }
};

export default fnc;
