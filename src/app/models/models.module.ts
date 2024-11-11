import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModelsPageRoutingModule } from './models-routing.module'; // Asegúrate de tener este archivo de rutas
import { ModelsPage } from './models.page'; // Importa el componente ModelsPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelsPageRoutingModule // Asegúrate de que el archivo de rutas esté importado
  ],
  declarations: [ModelsPage], // Declara el componente ModelsPage
})
export class ModelsPageModule {} // Exporta el módulo para poder importarlo en AppModule
