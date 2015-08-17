// ======================
// User Interface
// ======================

// Don't autofill URL bar
user_pref("browser.urlbar.autoFill", false);

// Don't trim URLs
user_pref('browser.urlbar.trimURLs', false);

// Open new tabs in background
user_pref("browser.search.context.loadInBackground", true);

// Disable new tab animation
user_pref('browser.tabs.animate', false);

// Don't select entire URL
user_pref("browser.urlbar.clickSelectsAll", false);

// ======================
// Network
// ======================

// Don't connect to remote links on hover
// See http://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// and: http://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links/
user_pref("network.http.speculative-parallel-limit", 0);


// ======================
// Privacy
// ======================

user_pref('privacy.donottrackheader.enabled', true);
user_pref('privacy.donottrackheader.value', 1);
user_pref('privacy.trackingprotection.enabled', true);

// ======================
// Devtools
// ======================
user_pref('devtools.editor.tabsize', 4);
user_pref('devtools.theme', dark);
user_pref('devtools.canvasdebugger.enabled', true);
user_pref('devtools.command-button-eyedropper.enabled', true);
user_pref('devtools.command-button-frames.enabled', true);
user_pref('devtools.command-button-paintflashing.enabled', true);
user_pref('devtools.command-button-scratchpad.enabled', true);
user_pref('devtools.command-button-screenshot.enabled', true);
user_pref('devtools.command-button-tilt', enabled);
user_pref('devtools.gcli.hideIntro', true);
user_pref('devtools.shadereditor.enabled', true);
user_pref('devtools.timeline.enabled', true);
user_pref('devtools.webaudioeditor.enabled', true);
user_pref('devtools.webconsole.timestampMessages', true);

// ======================
// Bloatware
// ======================

// Disable 'Reader Mode':
user_pref('reader.parse-on-load.enabled', false);
user_pref('readinglist.server', '');

// Disable 'Pocket':
user_pref('browser.pocket.api', '');
user_pref('browser.pocket.enabled', false);
user_pref('browser.pocket.site', '');
