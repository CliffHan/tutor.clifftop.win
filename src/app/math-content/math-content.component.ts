import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-content',
  templateUrl: './math-content.component.html',
  styleUrls: ['./math-content.component.css']
})
export class MathContentComponent implements OnInit {
  mathArray = [];
  maxNumber = 100;

  constructor() { }

  ngOnInit() {
    this.exec(this.maxNumber);
  }

  exec(maxNumber) {
    this.mathArray = [];
    let i;
    for (i = 1; i <= 20; i++) {
      let x = Math.floor(Math.random() * 100) + 1;
      let y = Math.floor(Math.random() * 100) + 1;
      if (x > y) {
        this.mathArray.push({x:x, y:y});
      }
      else {
        this.mathArray.push({x:y, y:x});
      }
    }
    // for(i = 1; i <= maxNumber; i++) {
    //   for (j = 1; j <= maxNumber; j++) {
    //     this.mathArray.push({x:i, y:j});
    //   }
    // }
  }

}
