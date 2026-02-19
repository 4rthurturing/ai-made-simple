const KEY = "4f8a9c0d1e2b3c4d5e6f708192a3b4c5";
const HOST = "hellosage.co.uk";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function fetchSitemapUrls() {
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
  }
  const xml = await response.text();
  const urlMatches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const urls = urlMatches.map((match) => match[1]).filter(Boolean);
  return Array.from(new Set(urls));
}

async function submitIndexNow(urlList) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const response = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();
  return { status: response.status, statusText: response.statusText, responseText };
}

async function run() {
  try {
    console.log(`Fetching sitemap: ${SITEMAP_URL}`);
    const urls = await fetchSitemapUrls();
    console.log(`Found ${urls.length} URLs in sitemap.`);

    if (urls.length === 0) {
      console.log("No URLs found to submit.");
      return;
    }

    console.log("Submitting URLs to IndexNow...");
    const result = await submitIndexNow(urls);
    console.log(`IndexNow response: ${result.status} ${result.statusText}`);
    if (result.responseText) {
      console.log(result.responseText);
    }
  } catch (error) {
    console.error("IndexNow submission failed:", error);
    process.exitCode = 1;
  }
}

run();
