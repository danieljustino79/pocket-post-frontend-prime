import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Publication} from '../models/publication.model';
import {PublicationService} from '../services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  publications: Publication[];

  constructor(
    private publicationService: PublicationService,
    private router: Router) { }

  ngOnInit(): void {
    this.publicationService.publications().subscribe(x => this.publications = x);
  }

  showPublication(publication: Publication){
    this.router.navigateByUrl(`publication/${publication.id}`);
  }

  editPublication(publication: Publication){    
    this.router.navigateByUrl(`publication/edit/${publication.id}`);
  }

}