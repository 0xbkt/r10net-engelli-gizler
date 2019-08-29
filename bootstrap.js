// ==UserScript==
// @name         R10.net Engelli Gizler
// @description  R10'da engellediğiniz kişilerden tamamen kurtulun.
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// @namespace    https://github.com/0xbkt
// @match        *://www.r10.net/*
// @version      0.1.0
// @author       0xbkt
// ==/UserScript==

// Suppress the linter of Tampermonkey editor.
/* globals $ */

{
    // Engel listesi.
    // Büyük küçük harf duyarlı.
    const BLOCKLIST = ['NiCk_1', 'nIcK_2']

    const disinfect = (_, val) => {
        for(let nick of BLOCKLIST) {
            $('.avatar, .user', val).html().includes(nick) && $(val).remove()
        }
    }

    // Zamanlayıcıyı kur.
    setInterval(() => {
        // Ana sayfa popülerler listesindeki başlıkları gizle.
        $('li.thread[id^="thread-"]').each(disinfect)

        // Konuları gizle.
        $('div.threadList .thread').each(disinfect)

        // Konulardaki yorumları gizle.
        $('li.post[id^="edit"]').each(disinfect)
    }, 500)
}
