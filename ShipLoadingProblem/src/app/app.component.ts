import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bemutatás', url: '/folder/Intro', icon: 'boat' },
    { title: 'Személyre szabás', url: '/folder/Custom', icon: 'shapes' },
    { title: 'Leírás', url: '/folder/Desc', icon: 'help-circle' },
  ];
  constructor() {}
}
