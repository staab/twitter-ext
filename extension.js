// ==UserScript==
// @name         Clean up Twitter
// @namespace    http*://twitter.com/*
// @version      0.1
// @description  Remove ads and suggested topics
// @author       jstaab
// @match        http*://twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const $ = s => document.querySelectorAll(s)

    setInterval(() => {
        $('[aria-label="Timeline: Trending now"]').forEach(e => e.remove())
        $('[aria-label="Who to follow"]').forEach(e => e.remove())
        $('[aria-label="Set as not interested"]').forEach(e => e.closest('[role="article"]').remove())
    }, 1000)
})();
