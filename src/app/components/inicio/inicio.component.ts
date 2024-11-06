import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { FormularioReservacionComponent } from '../formulario-reservacion/formulario-reservacion.component';
import { SystemService } from '../../service/system.service';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    FormularioReservacionComponent,
    CarruselComponent,
    EncabezadoComponent,
    CommonModule,
    SliderComponent
],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
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

