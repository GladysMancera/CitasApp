// src/app/pages/appointments/appointments.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppointmentsPage } from './appointments.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: AppointmentsPage }
    ])
  ],
  declarations: [AppointmentsPage]
})
export class AppointmentsPageModule {}
