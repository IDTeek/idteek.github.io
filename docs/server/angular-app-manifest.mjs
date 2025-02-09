
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/your_project_name/',
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
    'index.csr.html': {size: 24240, hash: '665226e379746d6490a61472ecd10b1936b407708bf4e1e4115622f366ec6929', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17800, hash: '54477bbcca5f02064ebdac8fec2b783e49d371647b43aac2e6bfbd80dd8c5e50', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LPD574KJ.css': {size: 6993, hash: 'n1oVF+7bQ38', text: () => import('./assets-chunks/styles-LPD574KJ_css.mjs').then(m => m.default)}
  },
};
