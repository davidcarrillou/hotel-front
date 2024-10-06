import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./components/encabezado/encabezado.component";
import { CarruselComponent } from "./components/carrusel/carrusel.component";
import { FormularioReservacionComponent } from "./components/formulario-reservacion/formulario-reservacion.component";
import { FormNewComponent } from "./components/form-new/form-new.component";
import { SystemService } from './service/system.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncabezadoComponent, CarruselComponent, FormularioReservacionComponent, FormNewComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'hotel-front';
  mensajeHabitaciondisponible: string = '';
  mensajeError: string = '';
  constructor(private systemService: SystemService) {

  }
  ngOnInit(): void {
    this.systemService.mensajeExito.subscribe({
      next: (mensajeExito) => {
        this.mensajeHabitaciondisponible = mensajeExito
      }, error: (err) => {
        this.mensajeError = 'error recibir el mensaje'
      },
    })
  }
}
