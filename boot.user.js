// ==UserScript==
// @name         R10.net Engelli Gizler
// @description  R10'da engellediğiniz kişilerden tamamen kurtulun.
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// @updateURL    https://github.com/0xbkt/r10net-engelli-gizler/raw/v2/boot.user.js
// @downloadURL  https://github.com/0xbkt/r10net-engelli-gizler/raw/v2/boot.user.js
// @namespace    https://github.com/0xbkt
// @match        *://www.r10.net/*
// @version      2.0.2
// @author       0xbkt
// ==/UserScript==

// Suppress the linter of Tampermonkey editor.
/* globals $ */

// Kullanıcı isminin yanına “engelle” butonu ekle.
$('div[class^="post"] .name').each((_, val) => {
    let nick = $('a:first', val).text().trim()

    $(val).after(`<a style="font-size: 10px" href="javascript: confirm('${nick} kullanıcısını gerçekten engellemek istiyor musunuz?') && document.dispatchEvent(new CustomEvent('ban_user', {detail: '${nick}'}));">Engelle</a>`)
})

{
    const getBlockedList = () => {
        if(typeof localStorage.R10EngelliGizlerBlokListesi == 'undefined') {
            return []
        }

        return localStorage.R10EngelliGizlerBlokListesi.split(',')
    }

    const pushBlockedList = (nick) => {
        let list = getBlockedList()
        list.push(nick)

        localStorage.R10EngelliGizlerBlokListesi = list
    }

    const disinfect = (_, val) => {
        for(let nick of getBlockedList()) {
            if(nick == "" || nick == null) continue

            $('.avatar, .user', val).html()?.includes(nick) && $(val).remove()
        }
    }

    // Banlanan kişileri listeye ekle.
    document.addEventListener('ban_user', (evt) => {
        pushBlockedList(evt.detail)
    })

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
