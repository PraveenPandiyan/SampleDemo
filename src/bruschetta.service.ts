

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salads } from './salad';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BruschettaService {

  private url8: string ="/assets/data/Bruschetta.json";

  
  constructor(private http: HttpClient) { }

  getItems(): Observable <Salads[]> {

    return this.http.get <Salads[]> (this.url8);
    
  }
}

