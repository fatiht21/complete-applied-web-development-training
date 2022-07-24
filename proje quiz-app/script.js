// OOP: Nesne Tabanlı Programlama
// Object

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "1- Hangisi js paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
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
  this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click", function () {
  document.querySelector(".quiz_box").classList.add("active");
  soruGoster(quiz.soruGetir());
  soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.sorular.length > quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    soruGoster(quiz.soruGetir());
    soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    document.querySelector(".next_btn").classList.remove("show");
  } else {
    console.log("Quiz bitti!");
    document.querySelector(".quiz_box").classList.remove("active");
    document.querySelector(".score_box").classList.add("active");
    skoruGoster(sorular.length, quiz.dogruCevapSayisi);
  }
});
const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function soruGoster(soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = "";

  for (let cevap in soru.cevapSecenekleri) {
    options += `
      <div class="option">
        <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
      </div>
    `;
  }

  document.querySelector(".question_text").innerHTML = question;
  option_list.innerHTML = options;

  const option = option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }

  // for (let opt of option) {
  //   opt.setAttribute("onclick", "optionSelected(this");
  // }
}

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
  }

  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }
  document.querySelector(".next_btn").classList.add("show");
}

function soruSayisiniGoster(soruSirası, toplamSoru) {
  let tag = `<span class="badge bg-warning">${soruSirası} / ${toplamSoru}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

function skoruGoster(toplamSoru, dogruCevap) {
  let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} dogru cevap verdiniz`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
}

document.querySelector(".btn_quit").addEventListener("click", function () {
  window.location.reload();
});

document.querySelector(".btn_replay").addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  document.querySelector(".btn_start").click();
  document.querySelector(".score_box").classList.remove("active");
});
