import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Correcto
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // Método para registrar al usuario con correo y contraseña
  async register(
    email: string,
    password: string,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    telefono: string
  ) {
    try {
      // Crear usuario con Firebase Authentication
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        // Guardar los datos del usuario en Firestore
        await this.firestore.collection('usuarios').doc(user.uid).set({
          nombres: nombres,
          apellidoPaterno: apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
          telefono: telefono,
          email: email
        });

        // Enviar correo de verificación
        await user.sendEmailVerification();
        console.log('Correo de verificación enviado');

        // Verificar si el correo está verificado o no
        if (user.emailVerified) {
          // Si ya está verificado, redirige al home
          this.router.navigate(['/home']);
        } else {
          // Si no está verificado, redirige a la página de verificación
          this.router.navigate(['/verify']);
        }
      } else {
        throw new Error('Error: El usuario no se ha creado correctamente.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Error al registrar el usuario: ' + error.message);
      } else {
        throw new Error('Error desconocido al registrar el usuario.');
      }
    }
  }

  // Método para iniciar sesión con correo y contraseña
  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        // Verificar si el correo está verificado
        if (!user.emailVerified) {
          // Si no está verificado, redirigir al usuario a la página de verificación
          throw new Error('Por favor, verifica tu correo electrónico antes de iniciar sesión.');
        }

        // Redirigir al usuario a la página principal
        this.router.navigate(['/home']);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === 'Por favor, verifica tu correo electrónico antes de iniciar sesión.') {
          // Si el correo no está verificado, redirigir a la página de verificación
          this.router.navigate(['/verify']);
        } else {
          throw new Error('Error al iniciar sesión. Verifica tus credenciales: ' + error.message);
        }
      } else {
        throw new Error('Error desconocido al iniciar sesión.');
      }
    }
  }

  // Método para cerrar sesión
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  // Método para re-enviar el correo de verificación
  async sendVerificationEmail() {
    const user = await this.afAuth.currentUser;
    if (user && !user.emailVerified) {
      await user.sendEmailVerification();
      console.log('Correo de verificación reenviado');
    } else {
      throw new Error('El correo ya está verificado o no hay un usuario autenticado');
    }
  }
}