import { Component } from '@angular/core';

@Component({
  selector: 'app-input-zipcode-data',
  templateUrl: './input-zipcode.component.html',
  styleUrls: ['./input-zipcode.component.css']
})

export class InputZipcodeDataComponent {

  title = 'Enter your zip code: ';
  zipCode = [6067, 6416, 6457, 6033];
  myZipCode = this.zipCode[0];

}
