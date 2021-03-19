import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicationComponent } from './publication/publication.component';
import { PublicationDetailComponent } from './publication/publication-detail/publication-detail.component';
import { PublicationEditComponent } from './publication/publication-edit/publication-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/publication', pathMatch: 'full' },
  { path: 'publication', component: PublicationComponent },
  { path: 'publication/:id', component: PublicationDetailComponent },
  { path: 'publication/edit/:id', component: PublicationEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
