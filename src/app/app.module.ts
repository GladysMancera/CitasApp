// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat'; // Importación de AngularFireModule
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Módulo de autenticación
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Módulo de Firestore
import { environment } from 'src/environments/environment'; // Configuración de Firebase
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase
    AngularFireAuthModule, // Módulo de autenticación de Firebase
    AngularFirestoreModule, // Módulo de Firestore de Firebase
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
