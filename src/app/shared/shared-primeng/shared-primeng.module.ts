import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    SharedModule,
    TableModule
  ],
  exports:[
    MenubarModule,
    SharedModule,
    TableModule
  ]
})
export class SharedPrimengModule { }
