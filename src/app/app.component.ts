import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    // if there's no entered letter
    if (!enteredLetter) {
      return 'pending';
    }
    // if entered letter & letter from rand sent 
    return enteredLetter === randomLetter ? 'correct' : 'incorrect'
  } 
}
