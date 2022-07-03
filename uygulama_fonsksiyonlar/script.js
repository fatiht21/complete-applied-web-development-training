// 1- kendisine gönderilen kelimeyi belirtilen sayı kadar ekranda yazan fonksiyonu yapınız.

function kelimeTekrar(kelime, sayi) {
  for (let i = 0; i < sayi; i++) {
    console.log(kelime);
  }
}

console.log(kelimeTekrar("kelime", 2));

//2- dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız

function alanCevreHesaplama(uzunkenar, kisakenar) {
  let alan = uzunkenar * kisakenar;
  let cevre = (uzunkenar + kisakenar) * 2;
  return `alan: ${alan} cevre: ${cevre}`;
}
let sonuc = alanCevreHesaplama(2, 5);
console.log(sonuc);

//3- yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTura() {
  let sayi = Math.random();
  let sonuc = "";

  if (sayi < 0.5) {
    sonuc = "tura";
  } else {
    sonuc = "yazi";
  }

  return sonuc;
}

console.log(yaziTura());

//4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolenler(sayi) {
  let tamBolen = [];

  for (let i = 2; i < sayi; i++)
    if (sayi % i == 0) {
      tamBolen.push(i);
    }
  return tamBolen;
}
console.log(tamBolenler(35));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}

console.log(toplam(1, 3, 5, 6));
