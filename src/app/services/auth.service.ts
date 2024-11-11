import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importar Firestore
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';  // Asegúrate de que esta ruta sea correcta
import { AngularFireModule } from '@angular/fire/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore, // Inyectamos AngularFirestore
    private router: Router
  ) {}

  // Método para registrar al usuario y guardar los detalles en Firestore
  async register(email: string, password: string, nombres: string, apellidoPaterno: string, apellidoMaterno: string, telefono: string) {
    try {
      // Crear usuario con Firebase Authentication
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        // Guardar los datos del usuario en Firestore (colección 'usuarios')
        await this.firestore.collection('usuarios').doc(user.uid).set({
          nombres: nombres,
          apellidoPaterno: apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
          telefono: telefono,
          email: email
        });

        this.router.navigate(['/home']);
      } else {
        throw new Error('Error: El usuario no se ha creado correctamente.');
      }
    } catch (error: unknown) {
      // Aseguramos que `error` es un objeto `Error` antes de acceder a `message`
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
      if (userCredential.user) {
        this.router.navigate(['/home']);
      }
    } catch (error: unknown) {
      // Aseguramos que `error` es un objeto `Error` antes de acceder a `message`
      if (error instanceof Error) {
        throw new Error('Error al iniciar sesión. Verifica tus credenciales: ' + error.message);
      } else {
        throw new Error('Error desconocido al iniciar sesión.');
      }
    }
  }

  // Método para verificar si el usuario está autenticado
  getCurrentUser() {
    return this.afAuth.authState;
  }

  // Método para cerrar sesión
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  // Método para agregar una cita a la colección 'citas'
  async addCita(nombre: string, medicalArea: string, fechayhora: string) {
    try {
      // Guardar la cita en la colección 'citas' en Firestore
      await this.firestore.collection('cita').add({
        nombre: nombre,
        areaMedica: medicalArea,
        fechaHora: fechayhora,
        usuarioId: (await this.afAuth.currentUser)?.uid // Asociar la cita al usuario actual
      });
      console.log('Cita guardada correctamente');
    } catch (error: unknown) {
      // Aseguramos que `error` es un objeto `Error` antes de acceder a `message`
      if (error instanceof Error) {
        throw new Error('Error al agendar la cita: ' + error.message);
      } else {
        throw new Error('Error desconocido al agendar la cita.');
      }
    }
  }
}
