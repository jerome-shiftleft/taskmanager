const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css/app.css').options({
    processCssUrls: false
  });

mix.copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');

mix.extract([
  'bootstrap', 'jquery', 'jquery-ui', '@popperjs/core',
  '@fortawesome/fontawesome-free', '@rwap/jquery-ui-touch-punch',
  'select2', 'select2-bootstrap-5-theme', 'daterangepicker'
])

mix.autoload({
  jquery: ['jquery', 'jQuery', '$', 'window.jQuery'],
  Popper: ['popper', 'Popper', 'popper.js'],
  popper: ['Popper', 'popper.js']  
});

var sass_debug = process.env.SASS_DEBUG;

if (sass_debug) {
  sass_debug = sass_debug.toLowerCase();
} // End of if (sass_debug)

switch (sass_debug) {
  case 'true':
  case '1':
  case 'yes':
    sass_debug_enable = true;
    break;
  default:
    sass_debug_enable = false;
} // End of switch(sass_debug)

// sass/scss debug in chrome inspection tools
if (sass_debug_enable) {
  mix.sourceMaps();
  mix.webpackConfig({
    devtool: "inline-source-map"
  });
} // end of if (sass_debug_enable)

// laravel mix css/js cache busting/versioning
if (mix.inProduction()) {
  mix.version();
} // End of if (mix.inProduction())

var browser_sync = process.env.BROWSER_SYNC;

if (browser_sync) {
  browser_sync = browser_sync.toLowerCase();
} // End of if (browser_sync)

var app_url = process.env.APP_URL;
var url = new URL(app_url);
var app_domain = url.hostname;

console.log(`APP_URL: ${app_url}`);
console.log(`APP_DOMAIN: ${app_domain}`);

var browser_sync_enable = false;

switch (browser_sync) {
  case 'true':
  case '1':
  case 'yes':
    browser_sync_enable = true;
    break;
  default:
    browser_sync_enable = false;
} // End of switch(browser_sync)

if (browser_sync_enable) {
  mix.browserSync({
    proxy: app_domain,
    port: 3000
  });
} // End of if (browser_sync)

var success_notif = process.env.MIX_SUCCESS_NOTIF;

if (success_notif) {
  success_notif = success_notif.toLowerCase();
} // End of if (success_notif)

switch (success_notif) {
  case 'true':
  case '1':
  case 'yes':
    success_notif_enable = true;
    break;
  default:
    success_notif_enable = false;
} // End of switch(browser_sync)

if (!success_notif_enable) {
  mix.disableSuccessNotifications();
}