

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salads } from './salad';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CarrotService {

  private url9: string ="/assets/data/Carrot.json";

  
  constructor(private http: HttpClient) { }

  getItems(): Observable <Salads[]> {

    return this.http.get <Salads[]> (this.url9);
    
  }
}
