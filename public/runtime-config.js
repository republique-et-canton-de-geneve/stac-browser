window.STAC_BROWSER_CONFIG = {
  // portable configuration that resolves paths dynamically
  historyMode: "history",
  pathPrefix: new URL(location.href).pathname,

  // uncomment this to preconfigure the catalog
  // catalogUrl: new URL("./catalog.json", location.href).href, // relative url
  // catalogUrl: "https://example.com/catalog.json", // absolute url

  // see https://github.com/radiantearth/stac-browser/blob/main/docs/options.md for more options
};
