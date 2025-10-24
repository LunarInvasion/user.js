/* Disable AI integrations */
user_pref("browser.ml.chat.enabled", false);

/* "Ask an AI Chatbot" when right clicking on pages */
user_pref("browser.ml.chat.menu", false);

/* "Use AI to suggest tabs and a name for tab groups". */
user_pref("browser.tabs.groups.smart.enabled", false);

/* AI chatbot button when vertical tabs are enabled */
user_pref("browser.ml.chat.sidebar", false)

/* https://github.com/mozilla-firefox/firefox/blob/16707ce1df112d9e067175ed8e16be717ab684c4/browser/app/profile/firefox.js#L2203C1-L2220C1 */

user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.chat.page.footerBadge", true);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.shortcuts.custom", false);
