// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let soru1 = new Soru(
  "Hangisi javascript paket yönetim uygulasıdır?",
  { a: "Node.js", b: "Typescript", c: "Npm" },
  "c"
);
let soru2 = new Soru(
  "Hangisi .net paket yönetim uygulasıdır?",
  { a: "Node.js", b: "Nuget", c: "Npm" },
  "b"
);

let sorular = [
  new Soru(
    "1- Hangisi js paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "2- Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "3- Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "4- Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click", function () {
  if (quiz.sorular.length > quiz.soruIndex) {
    document.querySelector(".quiz_box").classList.add("active");
    console.log(quiz.soruGetir());
    quiz.soruIndex++;
  } else {
    console.log("Quiz bitti!");
  }
});
