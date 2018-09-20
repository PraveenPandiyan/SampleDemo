import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISalads } from './salad';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SaladService{

  private url1: string ="/assets/data/Receipe.json";

  
    constructor(private http: HttpClient) { }
  
    getItems(): Observable <ISalads[]> {
  
      return this.http.get <ISalads[]> (this.url1);
      
    }

   
  }
  

