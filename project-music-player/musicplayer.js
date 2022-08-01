class MusicPlayer {
  constructor(musisList) {
    this.musisList = musisList;
    this.index = 0;
  }

  getMusic() {
    return this.musisList[this.index];
  }

  next() {
    if (this.index + 1 < this.musisList.length) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  prev() {
    if (this.index != 0) {
      this.index--;
    } else {
      this.index = this.musisList.length - 1;
    }
  }
}
