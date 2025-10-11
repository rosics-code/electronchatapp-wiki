  <script>
  const SITE_VERSION = "1.0.5";

  document.querySelectorAll('link[rel="stylesheet"], script[src]').forEach(el => {
    const url = new URL(el.href || el.src, location.origin);
    url.searchParams.set('v', SITE_VERSION);
    if (el.tagName === 'LINK') el.href = url;
    else el.src = url;
  });
</script>
