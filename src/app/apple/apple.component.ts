import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})


export class AppleComponent implements OnInit {

  @Input() var_3 = '';

  @Output() var_2 = new EventEmitter<string>();
  

  constructor() { 
  }

  ngOnInit() {
  }

  inputCatch(event: any) {
    this.var_2.emit(event.target.value);
  }

}
