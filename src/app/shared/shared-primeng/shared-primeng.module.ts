import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    MessagesModule,
    MessageModule,
    SharedModule,
    TableModule
  ],
  exports:[
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    MessagesModule,
    MessageModule,
    SharedModule,
    TableModule
  ]
})
export class SharedPrimengModule { }
