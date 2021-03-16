import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pocket-post-frontend-prime';
  items: MenuItem[];

  constructor() { 
    this.items = [];
 }

  ngOnInit() {
    this.items = [
        {
            label: 'Publications',
            icon: 'pi pi-book',
            routerLink: ['/publication']
        }
    ];
}
}