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

    let rm = s => document.querySelectorAll(s).forEach(e => e.remove())

    setInterval(() => {
        rm('[aria-label="Timeline: Trending now"]')
        rm('[aria-label="Who to follow"]')
    }, 1000)
})();
