import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

constructor() { }

// Creamos un BehaviorSubject que almacenará el valor del nombre
private nuevoMensajeExito = new BehaviorSubject<string>(''); 
private nuevoMensajeDisponible = new BehaviorSubject<string>(''); 
mensajeExito = this.nuevoMensajeExito.asObservable();
msjDisponible = this.nuevoMensajeDisponible.asObservable();

// Método para cambiar el valor del nombre
setMensajeExito(mensajeExito: string) {
  this.nuevoMensajeExito.next(mensajeExito);
}
setMensajeDispinible(msjDisponible: string) {
  this.nuevoMensajeDisponible.next(msjDisponible);
}

}
