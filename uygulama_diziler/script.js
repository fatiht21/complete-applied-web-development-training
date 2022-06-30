// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

// 2- Dizi kaç elemanlıdır ?

let sonuc = meyveler.length;

// 3- Dizinin ilk ve son elemanı nedir?

let ilkEleman = meyveler[0];

let sonEleman = meyveler[meyveler.length - 1];

console.log(`İlk eleman : ${ilkEleman} son eleman ${sonEleman}`);

// 4- "Elma" dizinin bir elemanı mıdır?

sonuc = meyveler.includes("Elma");

// 5- Kiraz meyvesini listenin sonua ekleyiniz

sonuc = meyveler.push("Kiraz");

//sonuc = meyveler.splice(meyveler.length -1, 0, "Kiraz")

// 6- Dizinin son iki elemanını siliniz

sonuc = meyveler.splice(meyveler.length - 2, 2);

console.log(sonuc);
console.log(meyveler);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını hesaplayınız

/*
   öğrenci 1: Yiğit Bilgi 2010 (70, 60, 80)
   öğrenci 2: Ada Bilgi 2012 (80, 80, 90)
   öğrenci 3: Ahmet Turan 2009 (60, 60, 70)
    */

let ogr1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogr3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];
let ogr1Ort = ((ogr1[3][0] + ogr1[3][1] + ogr1[3][2]) / 3).toFixed(1);
let ogr2Ort = ((ogr2[3][0] + ogr2[3][1] + ogr2[3][2]) / 3).toFixed(1);
let ogr3Ort = ((ogr3[3][0] + ogr3[3][1] + ogr3[3][2]) / 3).toFixed(1);

console.log(`
              Yaş  Ortalama
  Öğrenci 1 : ${2022 - ogr1[2]}    ${ogr1Ort}
  Öğrenci 2 : ${2022 - ogr2[2]}    ${ogr2Ort}
  Öğrenci 3 : ${2022 - ogr3[2]}    ${ogr3Ort}`);
