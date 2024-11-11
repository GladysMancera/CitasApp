// login-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login.page';  // Asegúrate de que LoginPage esté importado

const routes: Routes = [
  {
    path: '',        // Ruta vacía se resuelve con LoginPage
    component: LoginPage  // Componente que se cargará en esta ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Usamos RouterModule.forChild para rutas dentro de módulos
  exports: [RouterModule]
})
export class LoginPageRoutingModule {}
