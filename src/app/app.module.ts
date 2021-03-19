import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedPrimengModule } from './shared/shared-primeng/shared-primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationDetailComponent } from './publication/publication-detail/publication-detail.component';
import { PublicationEditComponent } from './publication/publication-edit/publication-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicationComponent,
    PublicationDetailComponent,
    PublicationEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedPrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
