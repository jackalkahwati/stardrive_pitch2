import puppeteer from "puppeteer";

// URL to capture – assumes the Next.js dev server or a deployed instance is running.
// If you need a different URL, pass it as the first CLI argument.
const url = process.argv[2] || "http://localhost:3000";

(async () => {
  const browser = await puppeteer.launch({
    headless: "new", // use new Headless for Chrome >= 112
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--font-render-hinting=medium",
    ],
  });

  const page = await browser.newPage();

  // Ensure we render in print-friendly mode by appending a query param the app can read.
  const target = url.includes("?") ? `${url}&print=1` : `${url}?print=1`;
  await page.goto(target, { waitUntil: "networkidle0" });

  // Wait until web fonts are fully loaded before PDF snapshot.
  await page.evaluate(async () => {
    // @ts-ignore – fonts is part of the CSS Font Loading API in modern browsers
    await document.fonts.ready;
  });

  // Emulate screen media so Tailwind's `print:` classes still work as expected.
  await page.emulateMediaType("print");

  await page.pdf({
    path: "astroshield.pdf",
    format: "letter",
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log("✅ astroshield.pdf generated successfully");
})(); 