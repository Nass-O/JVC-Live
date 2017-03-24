// ==UserScript==
// @name JVC Live
// @description Charger les nouveaux messages en direct sur JVC
// @author Singles
// @match http://www.jeuxvideo.com/*
// @match http://www.forumjv.com/*
// @run-at document-end
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require Favicon.js
// @require Formulaire.js
// @require Message.js
// @require Option.js
// @require Page.js
// @require JvcLive.js
// @version 1.1.4
// @grant none
// @noframes
// ==/UserScript==

var TL = new TopicLive();
TL.initStatic();
