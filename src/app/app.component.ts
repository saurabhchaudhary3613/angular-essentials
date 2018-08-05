import { Component } from '@angular/core';
import { random } from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  roortName = 'Sapient';
  number = 1;
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onIncrease() {
    // this.number = this.number * 2;
    this.number = random(1, 10);
  }

  onNameChanged(newName) {
    this.roortName = newName;
  }


  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
