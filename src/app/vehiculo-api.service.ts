import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vehiculoI } from './models/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculoApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  constructor(private HttpClient: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.HttpClient.get<any>(`${this.apiUrl}vehiculos/`);
  }
}
