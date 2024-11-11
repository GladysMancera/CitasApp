// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',    // Ruta predeterminada a la home
    pathMatch: 'full'
  },
  {
    path: 'login',    // Ruta para el login
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',     // Ruta para la página principal
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'signup',   // Ruta para el registro
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  // Otras rutas pueden ir aquí...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Usar pre-carga de módulos
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
