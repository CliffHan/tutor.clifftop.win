import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  // UPPERCASEDLETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // LOWERCASEDLETTERS = "abcdefghijklmnopqrstuvwxyz";
  LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  letterCount = "26";
  readInterval = "3";
  repeatTimes = "0";
  repeatInterval = "1";
  shuffle = true;
  playing = false;

  content = [];
  cursor = 0;
  repeatCursor = 0;

  constructor() { }

  ngOnInit() {
    this.generateContent();
  }
  ngOnDestroy() {
    this.playing = false;
    this.cursor = 0;
    this.repeatCursor = 0;
  }

  play() {
    if (this.playing) {
      this.playing = false;
    } else {
      this.playing = true;
    }

    if (this.cursor >= this.content.length) {
      this.cursor = 0;
    }

    window.setTimeout(() => { this.read(); }, 0);
  }

  read() {
    console.log("reading here");
    console.log(`playing=${this.playing}`);
    if (!this.playing) {
      return;
    }

    let interval = parseInt(this.readInterval);
    let repeat = parseInt(this.repeatTimes);
    let repInterval = parseInt(this.repeatInterval);
    let synth = window.speechSynthesis;
    let utterThis = new SpeechSynthesisUtterance(this.content[this.cursor]);
    console.log(`interval=${interval}, repeat=${repeat}, repInterval=${repInterval}`);
    synth.speak(utterThis);

    if (this.repeatCursor < repeat) {
      this.repeatCursor += 1;
      window.setTimeout(() => { this.read(); }, repInterval*1000);
    } else {
      this.cursor += 1;
      this.repeatCursor = 0;
      window.setTimeout(() => { this.read(); }, interval*1000);
    }
  }

  generateContent() {
    let num = parseInt(this.letterCount);
    let lettersArray = this.LETTERS.split("");

    if (num < 26) {
      let removeNum = 26 - num;
      for (let i = 0; i < removeNum; i++) {
        let randomIndex = Math.floor(Math.random()*(lettersArray.length));
        // console.log(`length=${lettersArray.length}, randomIndex=${randomIndex}, i=${i}`);
        lettersArray.splice(randomIndex, 1);
      }
    }
    this.cursor = 0;
    this.repeatCursor = 0;

    if (this.shuffle) {
      this.content = this.shuffleArray(lettersArray);
    } else {
      this.content = lettersArray;
    }

  }
  
  shuffleArray(myArray) {
    for (var i = myArray.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = myArray[randomIndex];
        myArray[randomIndex] = myArray[i];
        myArray[i] = itemAtIndex;
    }
    return myArray;
}
}
