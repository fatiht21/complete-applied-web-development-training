class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }
  getName() {
    return this.title + " - " + this.singer;
  }
}

const musisList = [
  new Music("Cinematic Time Lapse", "Lexin Music", "1.jpeg", "1.mp3"),
  new Music("Epicaly", "Lite Saturation", "2.jpeg", "2.mp3"),
  new Music("Epic Cinematic Trailer", "Pavel Yudin", "3.jpeg", "3.mp3"),
];
