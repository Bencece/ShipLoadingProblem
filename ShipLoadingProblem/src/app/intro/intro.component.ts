import { Component, NgModule, OnInit } from '@angular/core';
import Ship from '../models/ship';
import Container from '../models/container';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})


export class IntroComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  
  testShip = new Ship();
  c1 = new Container();
  c2 = new Container(50, 100, 800);
  c3 = new Container(60, 80, 450);
  testDock = [this.c1, this.c2, this.c3]

  teszt ="teszt"

}
