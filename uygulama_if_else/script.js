// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi = 49;

        if (sayi > 10 && sayi < 50) {
            console.log("sayı 10 ile 50 arasında");
        } else {
            console.log("sayı 10 ile 50 arasında değil");
        }

// 2- bir sayının pozitif tek bir sayı olup olmadığını kontrol ediniz

        if (sayi % 2 != 0 && sayi > 0) {
            console.log("sayı pozitif tek sayıdır");
        }

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız.

let x = 0;
let y = 2;
let z = 4;

        if(x > y && x > z){
            console.log("x en büyük sayıdır")
        } else if (y > x && y > z) {
            console.log("y en büyük sayıdır");
        } else if (z > x && z > y) {
            console.log("z en büyük sayıdır");
        } else {
            console.log("sayılar eşit")
        }

// 4- 2 vize(40%) ve 1 final (60%) notuna göre hesaplanan ortalama için;   
   
let vize1 = 10;
let vize2 = 10;
let final = 70;

let ortNot = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);
console.log(ortNot);

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın
        if (ortNot >= 50) {
            console.log("Geçti")
        } else {
            console.log("Kaldınız");
        }

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
        if (ortNot >= 50 && final >= 50) {
            console.log("Geçti");
        } else {
            console.log("Kaldınız")
        }

 // c- Finalden 70 alındığında ortalama 50 nin altındı olsa bile dersten geçilsin.

        if (final >= 70 || ortNot >= 50) {
            console.log("Geçti");
        } else {
            console.log("Kaldınız")
        }




