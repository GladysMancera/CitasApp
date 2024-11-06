import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // Definición de la información del usuario
  user = {
    nombre: 'Gladys Dayanni',
    descripcion: 'Estudiante',
    // Agrega otros datos del usuario si es necesario
  };

  // Inyectamos Router en el constructor para poder navegar entre páginas
  constructor(private router: Router) {}

  ngOnInit() {
    // Cualquier lógica de inicialización puede ir aquí
  }

  verCitas() {
    // Navegar a la página de citas médicas
    this.router.navigate(['/citas']);
  }
}