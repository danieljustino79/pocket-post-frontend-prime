import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicationComponent } from './publication/publication.component';

const routes: Routes = [
  { path: '', redirectTo: '/publication', pathMatch: 'full' },
  { path: 'publication', component: PublicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
