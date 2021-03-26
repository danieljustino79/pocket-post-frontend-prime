import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Publication } from '../../models/publication.model';
import { PublicationService } from '../../services/publication.service';
import { StringUtil } from '../../services/utils/string-util';

@Component({
  selector: 'app-publication-edit',
  templateUrl: './publication-edit.component.html',
  styleUrls: ['./publication-edit.component.scss']
})
export class PublicationEditComponent implements OnInit {

  publication: Publication;
  publicationForm: FormGroup; 
  accessOptions = [];
  previousOptions = [];
  nextOptions = [];
  results: any[];
  msgs = [];

  descriptionModeChecked = false;

  constructor(
    private publicationService: PublicationService,
    private route: ActivatedRoute,
    private router: Router, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.publicationForm = this.fb.group({
      'id': [''],
      'title': ['', [Validators.required]],
      'content': ['', [Validators.required, Validators.minLength(3)]],
      'previous': [''],
      'next': [''],
      'tags': [''],
      'accessLevel': ['']
    })

    this.loadFormAccessLevel();
    this.loadForm();
  }

  loadFormAccessLevel(){
    this.accessOptions = [
      {
        value: '1',
        description: 'public'
      },
      {
        value: '2',
        description: 'protected'
      }
    ];
  }

  loadFormPreviousNext(publications: Publication[], id, previous, next){
    let objNotBound = {
      value: 0,
      description: 'Não vinculado'
    };    
    this.previousOptions.push(objNotBound);
    this.nextOptions.push(objNotBound);

    let pubs = publications.filter(x => x.id != id);
    for(let pub in pubs){
      let obj = {
        value: pubs[pub]['id'],
        description: pubs[pub]['id'] + ' - ' + pubs[pub]['title']
      }
      this.previousOptions.push(obj)
      this.nextOptions.push(obj)
    }

    this.publicationForm.controls['previous'].setValue(previous);
    this.publicationForm.controls['next'].setValue(next);
  }

  loadForm(){
    let id = this.route.snapshot.params['id']
    this.publicationService.publication_by_id(id)
      .subscribe(x => {
        this.loadFormDefaultValues(x)
      });
  }

  private loadFormDefaultValues(publication: Publication){
    this.publicationForm.controls['id'].setValue(publication.id);
    this.publicationForm.controls['title'].setValue(publication.title);
    this.publicationForm.controls['content'].setValue(publication.content);
    this.publicationForm.controls['accessLevel'].setValue(publication.accessLevel.toString());
        
    if(!StringUtil.isUndefinedOrEmptyOrNull(publication.tags)){
      let tagArray = publication.tags.split(',')
      this.publicationForm.controls['tags'].setValue(tagArray);
    }    
    
    this.publicationService.publications()
      .subscribe(x => {
        this.loadFormPreviousNext(x, publication.id, publication.previous, publication.next)
      })
  }

  updatePublication(publication: Publication){

    let tagArray = [].concat(publication.tags);
    let tagFix = tagArray.toString();

    let pub: Publication = {
      'id': publication.id,
      'title': publication.title,
      'content': publication.content,
      'tags': tagFix,
      'accessLevel': Number(publication.accessLevel),
      'next': publication.next,
      'previous': publication.previous
    }

    this.publicationService.updatePublication(pub)
      .subscribe(x => {
        this.publication = x
        this.msgs = [{severity:'info', summary:'', detail:'O registro foi alterado com sucesso.'}];
      });
  }

  search(event) {
    this.results = ['api', 'backend', 'command-line', 'design', 'frontend', 'http', 'infra', 'security', 'storage', 'test', 'linux'];
  }

  handleChangeDescriptionMode(ev){
    this.descriptionModeChecked = ev.checked;
  }
}
