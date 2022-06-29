let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Gelistirme Kursu";

// 1- url kaç karakterlidir?

     let sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?

        sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

        sonuc = url.startsWith("https");

        if (sonuc) {
                console.log("Evet başlıyor");
        }

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
        
        sonuc = kursAdi.includes("Eğitimi");

        if (kursAdi.indexOf("Eğitimi") !== -1) {
                console.log("Evet içeriyor");
        } else {
                console.log("Hayır içermiyor")
        }

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.replaceAll(" ", "-").toLocaleLowerCase();

sonuc = `${url}${kursAdi}`


console.log(sonuc)