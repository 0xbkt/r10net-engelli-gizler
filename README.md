## R10.net Engelli Gizler

### Şunları gizler:
- Ana sayfa üst taraftaki popülerler listesi ve diğer panolar.
- Konular.
- Konu yorumları.

### Kurulum
- Scripti R10'a otomatik olarak enjekte etmek için Tampermonkey eklentisi gerekiyor.
  - Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
  - Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
- Eklenti kurulduktan sonra aşağıdaki adresten script kurulmalı.
  - https://github.com/0xbkt/r10net-engelli-gizler/raw/master/boot.user.js
- Artık her konuda kullanıcıların isminin yanında “engelle” butonu belirecek. Bu butonu kullanarak kişileri engelleyebilirsiniz.

### Engel Kaldırmak
Engel kaldırmak için herhangi bir arayüz yok. Tarayıcıda aşağıdaki yolu takip etmeniz lazım.

`Sağ Tık > Öğeyi Denetle > Application (Uygulama) > Storage (Depo) > Local Storage (Yerel Depo) > R10`

Burada `R10EngelliGizlerBlokListesi` değerini isteğe göre ya tamamen silebilir ya da kullanıcı adları boşluksuz olarak virgülle ayrılacak şekilde düzenleyebilirsiniz.

![](https://i.snipboard.io/qVL3bK.jpg)
