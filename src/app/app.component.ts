import { Component } from '@angular/core';

import raneellereske from "../assets/raneellereske.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rane = "Rane";
  eske = "Eske";

  orderRane: Array<String> = Array();
  orderEske: Array<String> = Array();
  order: Array<number>;
  raneeske: Array<String>;
  truth: Array<boolean> = Array();

  i: number = 0;
  title: string;
  guessed = false;
  correct = false;
  nCorrect = 0;

  get length() { return raneellereske.rane.length; }
  get correctShare() { return this.nCorrect / this.length; }

  constructor() {
    this.title = (Math.random() >= 0.5
      ? `${this.rane} eller ${this.eske}`
      : `${this.eske} eller ${this.rane}`) + "?";
    this.order = [...Array(2 * this.length).keys()]
      .map(a => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
    this.raneeske = raneellereske["rane"];
    this.raneeske.push(...raneellereske["eske"]);
  }

  public getImg(): String {
    const name = this.order[this.i] >= raneellereske["eske"].length ? "eske" : "rane";
    return `assets/imgs/${name}/${this.raneeske[this.order[this.i]]}`;
  }

  public guess(name: string) {
    this.guessed = true;
    this.correct = (this.order[this.i] >= raneellereske["eske"].length ? "eske" : "rane") === name;
    this.nCorrect += this.correct ? 1 : 0;
    if (this.i < this.length)
        this.i ++;
  }
}
