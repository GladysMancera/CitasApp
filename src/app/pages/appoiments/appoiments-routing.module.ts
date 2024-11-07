import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoimentsPage } from './appoiments.page';

const routes: Routes = [
  {
    path: '',
    component: AppoimentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoimentsPageRoutingModule {}
