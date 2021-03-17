import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedPrimengModule } from './shared/shared-primeng/shared-primeng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationDetailComponent } from './publication/publication-detail/publication-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicationComponent,
    PublicationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedPrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
