import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-content',
  templateUrl: './math-content.component.html',
  styleUrls: ['./math-content.component.css']
})
export class MathContentComponent implements OnInit {
  mathArray = [];
  maxNumber = 5;

  constructor() { }

  ngOnInit() {
    this.exec(this.maxNumber);
  }

  exec(maxNumber) {
    this.mathArray = [];
    let i, j;
    for(i = 1; i <= maxNumber; i++) {
      for (j = 1; j <= maxNumber; j++) {
        this.mathArray.push({x:i, y:j});
      }
    }
  }

}
