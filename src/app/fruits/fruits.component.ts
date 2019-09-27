import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  var_1 = '';
  var_4 = '';

  constructor() { }

  ngOnInit() {
  }

  getOutput(event: any){
    this.var_4 = event;
  }

}
