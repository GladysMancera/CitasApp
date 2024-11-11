import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';  // Asegúrate de que la ruta es correcta
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
    private authService: AuthService, // Inyecta el servicio de autenticación
    private navCtrl: NavController  // Inyecta el NavController para navegación
  ) {}

  // Método para login con correo y contraseña
  login() {
    this.authService.login(this.email, this.password).then(() => {
      // Si el login es exitoso, navega al home
      this.navCtrl.navigateRoot('/home'); // Redirige a la página de home
    }).catch(error => {
      // Manejo de errores
      console.error('Login error:', error);
    });
  }

  // Método para login con Google
  async loginWithGoogle() {
    try {
      await this.authService.loginWithGoogle();  // Llamamos al método del servicio
      this.navCtrl.navigateRoot('/home');  // Si el login es exitoso, redirige al home
    } catch (error) {
      console.error('Login with Google error:', error);  // Manejo de errores
    }
  }
}