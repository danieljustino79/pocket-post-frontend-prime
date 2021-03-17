import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    SharedModule,
    TableModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    SharedModule,
    TableModule
  ]
})
export class SharedPrimengModule { }
