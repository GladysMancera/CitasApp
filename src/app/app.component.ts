import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Inicio', url: '/pages/home', icon: 'home' },
    { title: 'Perfil', url: '/pages/profile', icon: 'person' },
    { title: 'Citas', url: '/pages/appoiments', icon: 'calendar' },
    { title: 'Notificaciones', url: '/pages/notifications', icon: 'notifications' },
  ];
  public labels = [];

  constructor(
    private menu: MenuController,
    private router: Router
  ) {}

  ngOnInit() {
    // Filtramos solo los eventos de tipo NavigationEnd
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd) // Filtro explícito de tipo
    ).subscribe((event) => {
      const currentRoute = this.router.url;

      // Desactivar el menú si la ruta es login o signup
      if (currentRoute.includes('login') || currentRoute.includes('signup') || currentRoute.includes('landing')) {
        this.menu.enable(false);  // Desactivar el menú
      } else {
        this.menu.enable(true);  // Habilitar el menú en otras rutas
      }
    });
  }
}
