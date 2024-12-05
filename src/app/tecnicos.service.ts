import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://tu-api.com/tecnicos';  
export interface Tecnico {
  id: number;
  nombre: string;
  especialidad: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  constructor(private http: HttpClient) { }
  getTecnicos(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(API_URL);
  }
}
