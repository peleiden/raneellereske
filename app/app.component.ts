import { Component } from '@angular/core';

import raneellereske from "../assets/raneellereske.json";

function shuffleArray(array: Array<any>) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameRane = "Rane";
  nameEske = "Eske";

  rane: Array<string>;
  eske: Array<string>;
  order: Array<number>;  // 0 for Rane, 1 for Eske

  iRane = 0;
  iEske = 0;
  title: string;
  guessed = false;
  correct = false;
  nCorrect = 0;
  maxImgs = 10;

  get i() { return this.iRane + this.iEske };
  get length() { return this.rane.length + this.eske.length; }

  constructor() {
    this.title = (Math.random() >= 0.5
      ? `${this.nameRane} eller ${this.nameEske}`
      : `${this.nameEske} eller ${this.nameRane}`) + "?";
    this.rane = raneellereske["rane"];
    shuffleArray(this.rane);
    this.eske = raneellereske["eske"];
    shuffleArray(this.eske);
    this.order = Array(this.length);
    for (let i = 0; i < this.length; i ++) {
      this.order[i] = i < this.rane.length ? 0 : 1;
    }
    shuffleArray(this.order);
    console.log("If you see this, you can give someone a shot");
  }

  public getImg(): string {
    const name = this.order[this.i] ? this.nameEske : this.nameRane;
    let img: string;
    if (name == this.nameRane) {
      img = this.rane[this.iRane];
    } else {
      img = this.eske[this.iEske];
    }
    return `assets/imgs/${name.toLowerCase()}/${img}`;
  }

  public guess(guess: number) {
    this.guessed = true;
    this.correct = guess == this.order[this.i];
    if (this.correct) {
      this.nCorrect ++;
    }
    if (this.order[this.i]) {
      this.iEske ++;
    } else {
      this.iRane ++;
    }
  }
}
