import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(
    private http:HttpClient
  ) { }
  getMenu(){
    return this.http.get<any>('http://localhost:3000/restaurants');
  }
}
