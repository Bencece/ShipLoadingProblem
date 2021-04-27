import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bemutatás', url: '/intro', icon: 'boat' },
    { title: 'Személyre szabás', url: '/custom', icon: 'shapes' },
    { title: 'Leírás', url: '/info', icon: 'help-circle' },
  ];
  constructor() {}
}