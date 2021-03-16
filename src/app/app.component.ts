import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rane = "Rane";
  eske = "Eske";

  get title(): string {
    return Math.random() >= 0.5
      ? `${this.rane} eller ${this.eske}`
      : `${this.eske} eller ${this.rane}`;
  }
}
