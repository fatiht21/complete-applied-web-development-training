/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

let ogr1Name = "ada bilgi";
let ogr1DTarihi = 2012;
let ogr1MatNot1 = 70;
let ogr1MatNot2 = 70;
let ogr1MatNot3 = 80;

let ogr2Name = "yiğit bilgi";
let ogr2DTarihi = 2010;
let ogr2MatNot1 = 40;
let ogr2MatNot2 = 40;
let ogr2MatNot3 = 50;

suankiYil = new Date().getFullYear();
const ogr1Yas = suankiYil - ogr1DTarihi;
const ogr2Yas = suankiYil - ogr2DTarihi;

const ogr1Ort = (ogr1MatNot1 + ogr1MatNot2 + ogr1MatNot3) / 3 ;
const ogr2Ort = (ogr2MatNot1 + ogr2MatNot2 + ogr2MatNot3) / 3 ;

console.log(ogr1Yas);
console.log(ogr2Yas);

console.log(parseInt(ogr1Ort));
console.log(parseInt(ogr2Ort));

console.log(ogr1Ort >= 50);
console.log(ogr2Ort >= 50);



