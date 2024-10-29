import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/pages/home', icon: 'home' },
    { title: 'Perfil', url: '/pages/profile', icon: 'person' },
    { title: 'Citas', url: '/pages/appoiments', icon: 'calendar' },
  ];
  public labels = [];
  constructor() {}
}
