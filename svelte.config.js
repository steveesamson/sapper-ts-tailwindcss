const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    postcss:true,
    less:true,
    typescript: { transpileOnly: true, tsconfigDirectory: '.',}
  })
};
// set svelte.plugin.css.diagnostics.enable in vs code
