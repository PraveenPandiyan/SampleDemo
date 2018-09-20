import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salads } from './salad';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ChickenService {

  private url5: string ="/assets/data/Chicken.json";

  
  constructor(private http: HttpClient) { }

  getItems(): Observable <Salads[]> {

    return this.http.get <Salads[]> (this.url5);
    
  }
}
