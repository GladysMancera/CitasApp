// login.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';  // Asegúrate de importar el archivo de rutas
import { LoginPage } from './login.page';  // Componente LoginPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule  // Importamos el módulo de rutas específico para Login
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
