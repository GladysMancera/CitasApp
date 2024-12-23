import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsPage } from './models.page';

const routes: Routes = [
  {
    path: '',
    component: ModelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsPageRoutingModule {}
