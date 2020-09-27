import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../intefaces/Furniture';

@Injectable()
export class FurnitureService {
  private readonly baseUrl = 'http://localhost:5000/furniture';

  constructor(
    private http : HttpClient
  ) {  }

  create(furniture: Furniture) {
    return this.http.post(`${this.baseUrl}/create`, furniture);
  }

  all() {
    return this.http.get<Furniture[]>(`${this.baseUrl}/all`);
  }

  details(id: string) {
    return this.http.get<Furniture>(`${this.baseUrl}/details/${id}`)
  }

  user() {
    return this.http.get(`${this.baseUrl}/user`)
  }
  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }
}