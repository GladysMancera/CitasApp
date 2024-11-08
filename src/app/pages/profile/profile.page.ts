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
    nombre: 'Gladys Dayanni Mancera Rio de la losa',
    descripcion: 'Estudiante',
    fotoUrl: 'assets/perfil.jpg', // Cambia esto con la URL de la foto del perfil
  };

  // Definición de las citas registradas
  citas = [
    {
      titulo: 'Consulta Médica General',
      fecha: new Date('2024-11-10'),
      descripcion: 'Revisión médica para chequeo general de salud.',
    },
    {
      titulo: 'Ginecología',
      fecha: new Date('2024-11-15'),
      descripcion: 'Chequeo general.',
    },
  ];

  // Inyectamos Router en el constructor para poder navegar entre páginas
  constructor(private router: Router) {}

  ngOnInit() {
    // Cualquier lógica de inicialización puede ir aquí
  }

  // Método para navegar a la página de citas médicas
  verCitas() {
    this.router.navigate(['/appoiments']);
  }
}