const SITE_VERSION = "1.0.0";

document.querySelectorAll('link[rel="stylesheet"], script[src]').forEach(el => {
  if (el.src && el.src.includes('version.js')) return;

  const url = new URL(el.href || el.src, location.origin);
  url.searchParams.set('v', SITE_VERSION);

  if (el.tagName === 'LINK') el.href = url;
  else if (el.tagName === 'SCRIPT') el.src = url;
});
