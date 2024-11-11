import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase/compat/app';  // Importa firebase para trabajar con su autenticación
import 'firebase/compat/auth';  // Importa autenticación de Firebase

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
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        await this.firestore.collection('usuarios').doc(user.uid).set({
          nombres: nombres,
          apellidoPaterno: apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
          telefono: telefono,
          email: email
        });

        const actionCodeSettings = {
          url: 'http://localhost:8101/login',  // Reemplaza con tu URL de login
          handleCodeInApp: true,
        };
        await user.sendEmailVerification(actionCodeSettings);
        console.log('Correo de verificación enviado');

        if (user.emailVerified) {
          this.router.navigate(['/home']);
        } else {
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
        if (!user.emailVerified) {
          throw new Error('Por favor, verifica tu correo electrónico antes de iniciar sesión.');
        }

        this.router.navigate(['/home']);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === 'Por favor, verifica tu correo electrónico antes de iniciar sesión.') {
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

  // Método para iniciar sesión con Google
  async loginWithGoogle() {
    try {
      // Usamos el proveedor de Google para la autenticación
      const provider = new firebase.auth.GoogleAuthProvider();  // Crear el proveedor de Google
      const result = await this.afAuth.signInWithPopup(provider);  // Usar el popup para el login
      const user = result.user;

      if (user) {
        // Aquí puedes almacenar los datos del usuario en Firestore, si es necesario
        console.log('Usuario autenticado con Google:', user);
        this.router.navigate(['/home']);  // Redirigir al home después del login exitoso
      }
    } catch (error) {
      console.error('Error durante el login con Google:', error);  // Capturar el error
      throw error;  // Lanza el error para que sea manejado en la página de login
    }
  }
}