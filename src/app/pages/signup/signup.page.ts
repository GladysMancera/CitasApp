import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; // Verifica si la ruta es correcta
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  // Campos del formulario inicializados
  nombres: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  email: string = '';
  telefono: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  // Función para registrar al usuario
  async register() {
    try {
      // Llamada al servicio de autenticación para registrar el usuario
      await this.authService.register(
        this.email,
        this.password,
        this.nombres,
        this.apellidoPaterno,
        this.apellidoMaterno,
        this.telefono
      );

      // Redirigir al usuario a la página de inicio tras el registro exitoso
      this.router.navigate(['/home']);
    } catch (error: any) {
      // Manejo de errores y visualización de alertas
      const alert = await this.alertController.create({
        header: 'Error',
        message: error?.message || 'Ocurrió un error al registrarse.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
