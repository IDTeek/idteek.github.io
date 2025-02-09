
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-4ERMBBKJ.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 24222, hash: '0a1de5bfbda438797d5638d7eb468e3f58bd86293cf6bd66f68276253552bbb3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17782, hash: '31b9da382dfa05d63f74a85f105440c64df29e80e05eb04f56224a7ae4782402', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LPD574KJ.css': {size: 6993, hash: 'n1oVF+7bQ38', text: () => import('./assets-chunks/styles-LPD574KJ_css.mjs').then(m => m.default)}
  },
};
