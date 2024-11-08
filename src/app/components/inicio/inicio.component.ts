import { Component, OnInit } from '@angular/core';
import { FormularioReservacionComponent } from '../formulario-reservacion/formulario-reservacion.component';
import { SystemService } from '../../service/system.service';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { CuartosComponent } from "../cuartos/cuartos.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    FormularioReservacionComponent,
    CommonModule,
    SliderComponent,
    CuartosComponent,
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  title = 'hotel-front';
  mensajeHabitaciondisponible: string = '';
  mensajeError: string = '';
  mensajeExito: string = '';
  constructor(private systemService: SystemService) {

  }
  ngOnInit(): void {
    this.systemService.mensajeExito.subscribe({
      next: (mensajeExito) => {
        this.mensajeExito = mensajeExito
      }, error: (err) => {
        this.mensajeError = 'error recibir el mensaje'
      },
    });
    this.systemService.msjDisponible.subscribe({
      next: (msjDisponible) => {
        this.mensajeHabitaciondisponible = msjDisponible
      }, error: (err) => {
        this.mensajeError = 'error recibir el mensaje'
      },
    });
  }
}

