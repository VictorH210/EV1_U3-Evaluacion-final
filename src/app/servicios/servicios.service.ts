import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = `${environment.backend}/servicios`;  

  constructor(private http: HttpClient) { }

  obtenerServicios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/obtener-servicios`);
  }
}
