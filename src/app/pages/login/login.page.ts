import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';  // Ajusta la ruta del servicio de autenticación
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController  // Agrega NavController al constructor
  ) {}

  login() {
    this.authService.login(this.email, this.password).then(() => {
      // Si el login es exitoso, navega al home
      this.navCtrl.navigateRoot('/home'); // Redirige a la página de home
    }).catch(error => {
      // Manejo de errores
      console.error('Login error:', error);
    });
  }
}