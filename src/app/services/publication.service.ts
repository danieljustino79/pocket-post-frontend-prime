import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Publication} from '../models/publication.model';
import { API_URL } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  publications(): Observable<Publication[]>{
    let url = `${API_URL}publication`;
    return this.http.get(url)
     .pipe(map(x => x['data']));
  }

  publication_by_id(id: number): Observable<Publication>{
    let url = `${API_URL}publication/${id}`;

     return this.http.get(url)
     .pipe(map(x => x['data']['0']));
  }

  updatePublication(publication: Publication): Observable<Publication>{
    return this.http.put(`${API_URL}publication/${publication.id}`,
                          JSON.stringify(publication),
                          this.httpOptions)
      .pipe(map(x => x['data']));
  }
}
