import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cuarto } from '../../models/cuarto';
import { ModalImagenZoomComponent } from "../modal-imagen-zoom/modal-imagen-zoom.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuartos',
  standalone: true,
  imports: [
    CommonModule,
    ModalImagenZoomComponent
],
  templateUrl: './cuartos.component.html',
  styleUrl: './cuartos.component.css'
})
export class CuartosComponent {
  cuartoSeleccionado: cuarto | null = null;
  verCuarto = false;
  rooms: cuarto[] = [
    {
      id: 1,
      title: 'Cuarto sencillo',
      description: 'Cuarto sencillo y acogedor',
      mainImage: '/assets/img/cuarto6-low.jpeg',
      images: [
        { id: 1, url: '/assets/img/cuarto6-low.jpeg', thumbnail: '/assets/img/cuarto6-lw.jpeg', title: 'Habitacion sencilla' },
        { id: 2, url: '/assets/img/cuarto2.jpeg', thumbnail: '/assets/img/cuarto2.jpeg', title: 'Habitacion sencilla' },
        { id: 3, url: '/assets/img/cuarto1.jpeg', thumbnail: '/assets/img/cuarto1.jpeg', title: 'Habitacion sencilla' },
        // Add more images as needed
      ]
    },
    {
      id: 2,
      title: 'Cuarto Doble',
      description: 'Camas mas grandes para hasta 4 personas',
      mainImage: '/assets/img/cuarto5-low.jpeg',
      images: [
        { id: 1, url: '/assets/img/cuarto3.jpeg', thumbnail: '/assets/img/cuarto3.jpeg', title: 'Habitacion doble' },
        { id: 2, url: '/assets/img/cuarto2.jpeg', thumbnail: '/assets/img/cuarto2.jpeg', title: 'Habitacion doble' },
        { id: 3, url: '/assets/img/cuarto4.jpeg', thumbnail: '/assets/img/cuarto4.jpeg', title: 'Habitacion doble' },
        { id: 4, url: '/assets/img/cuarto5-low.jpeg', thumbnail: '/assets/img/cuarto5-low.jpeg', title: 'Habitacion doble' },
        // Add more images as needed
      ]
    },
  ];

  constructor(private router: Router){}

  verDetalleCuarto(room: cuarto) {
    this.cuartoSeleccionado = room;
    this.verCuarto = true;
  }

  reservarCuarto(rooms: cuarto){
    console.log('cuarto selecc:',rooms)
    this.router.navigate(['/contacto']);
  }

  cerrarDetalleCuarto() {
    this.verCuarto = false;
    this.cuartoSeleccionado = null;
  }
}