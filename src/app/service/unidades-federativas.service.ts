// src/app/unidades-federativas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadesFederativasService {

  private apiUrl = 'http://localhost:8080/unidadesFederativas';
  private headers = new HttpHeaders({
    'user': 'admin',
    'Cookie': 'JSESSIONID=6292662622BE4723BCF21279A89178F0'
  });

  constructor(private http: HttpClient) {
    console.log('UnidadesFederativasService.constructor')
  }

  getUnidadesFederativas(): Observable<any[]> {
    console.log('UnidadesFederativasService.getUnidadesFederativas')
    return this.http.get<any[]>(this.apiUrl, { headers: this.headers });
  }
}
