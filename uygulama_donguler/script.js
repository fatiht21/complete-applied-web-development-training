let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

for (let i = 0; i < sayilar.length; i++) {
  karesi = sayilar[i] * sayilar[i];
  console.log(karesi);
}

for (let sayi of sayilar) {
  console.log(sayi * sayi);
}

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 5 == 0) {
    console.log(sayilar[i]);
  }
}

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let toplam = 0;
for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 2 == 0) {
    toplam += sayilar[i];
  }
}
console.log(toplam);

for (let i in sayilar) {
  if (sayilar[i] % 2 == 0) {
    toplam += sayilar[i];
  }
}

// console.log(toplam);

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

let urunler = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20",
];

for (let i = 0; i < urunler.length; i++) {
  console.log(urunler[i].toUpperCase());
}

for (urun of urunler) {
  console.log(urun.toUpperCase());
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?

let urunSayisi = 0;

for (let i = 0; i < urunler.length; i++) {
  if (urunler[i].includes("samsung")) {
    urunSayisi++;
  }
}

// for(let urun of urunler) {
//     if(urun.includes("samsung")) {
//         urunSayisi++
//     }
// }
console.log(urunSayisi);

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
let ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 20, 60] },
];

for (let ogrenci of ogrenciler) {
    let notToplami = 0;
    let ortalama = 0;
    let notSayisi = 0;
    for(let not of ogrenci.notlar){
        notToplami += not;
        notSayisi++;
    }
    ortalama = notToplami / notSayisi;
    console.log(`${ogrenci.ad} ${ogrenci.soyad} nin not ortalaması: ${parseInt(ortalama)}.`)

    ortalama >= 50 ? console.log("Başarılı") : console.log("Başarısız");
}

// tüm öğrencilerin not ortalaması kaçtır?
