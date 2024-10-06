import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'https://api.ejemplo.com/reservas';

  constructor(private http: HttpClient) { }

  hacerReserva(datosReserva: any): Observable<any> {
    return this.http.post(this.apiUrl, datosReserva);
  }
}
