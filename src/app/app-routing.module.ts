import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicationComponent } from './publication/publication.component';
import { PublicationDetailComponent } from './publication/publication-detail/publication-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/publication', pathMatch: 'full' },
  { path: 'publication', component: PublicationComponent },
  { path: 'publication/:id', component: PublicationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
