import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';  // Ajusta la ruta del servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password).then(() => {
      // Lógica de redirección o manejo de éxito
    }).catch(error => {
      // Manejo de errores
      console.error('Login error:', error);
    });
  }
}
