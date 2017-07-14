import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { List } from './list';

@Injectable()
export class ListService {
private lists: List[] = [];
  private headers = new Headers({'Content-Type': 'application/json'});
  
  private url = '/api/lists';
  constructor(private http: Http) { }

  getLists(): Promise<List[]> {
    return this.http.get(this.url)
             .toPromise()
             .then(response => response.json() as List[])
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
