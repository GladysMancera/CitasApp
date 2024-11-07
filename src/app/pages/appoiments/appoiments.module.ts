import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AppoimentsPageRoutingModule } from './appoiments-routing.module';
import { AppoimentsPage } from './appoiments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AppoimentsPageRoutingModule
  ],
  declarations: [AppoimentsPage]
})
export class AppoimentsPageModule {}
