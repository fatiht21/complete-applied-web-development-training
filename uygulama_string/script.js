let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

        sonuc = url.length;
// 2- kursAdi kaç kelimeden oluşmaktadır?

        sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

        sonuc = url.startsWith("https");

console.log(sonuc)