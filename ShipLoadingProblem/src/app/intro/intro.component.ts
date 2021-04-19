import { Component, OnInit } from '@angular/core';
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
    let testShip = new Ship();
    let c1 = new Container();
    let c2 = new Container(50, 100, 800);
    let c3 = new Container(60, 80, 450);
    var testDock = {c1, c2, c3}
  }


}
