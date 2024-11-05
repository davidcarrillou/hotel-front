import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cuarto } from '../../models/cuarto';
import { ModalImagenZoomComponent } from "../modal-imagen-zoom/modal-imagen-zoom.component";

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
      title: 'Double Room',
      description: 'Each room has its own unique décor and arrangement.',
      mainImage: '/assets/img/1.jpg',
      images: [
        { id: 1, url: '/assets/img/1.jpg', thumbnail: '/assets/img/2.jpg', title: 'Double Room View 1' },
        { id: 2, url: '/assets/img/2.jpg', thumbnail: '/assets/img/2.jpg', title: 'Double Room View 2' },
        { id: 3, url: '/assets/img/3.jpg', thumbnail: '/assets/img/3.jpg', title: 'Double Room View 3' },
        // Add more images as needed
      ]
    },
    {
      id: 2,
      title: 'Luxury Suite',
      description: 'Each room has its own unique décor and arrangement.',
      mainImage: '/assets/img/2.jpg',
      images: [
        { id: 1, url: '/assets/img/2.jpg', thumbnail: '/assets/img/2.jpg', title: 'Double Room View 1' },
        { id: 2, url: '/assets/img/3.jpg', thumbnail: '/assets/img/2.jpg', title: 'Double Room View 2' },
        { id: 3, url: '/assets/img/1.jpg', thumbnail: '/assets/img/3.jpg', title: 'Double Room View 3' },
        // Add more images as needed
      ]
    },
    {
      id: 3,
      title: 'Family Room',
      description: 'Each room has its own unique décor and arrangement.',
      mainImage: '/assets/img/3.jpg',
      images: [
        { id: 1, url: '/assets/img/3.jpg', thumbnail: '/assets/img/2.jpg', title: 'Double Room View 1' },
        { id: 2, url: '/assets/img/1.jpg', thumbnail: '/assets/img/2.jpg', title: 'Double Room View 2' },
        { id: 3, url: '/assets/img/2.jpg', thumbnail: '/assets/img/3.jpg', title: 'Double Room View 3' },
        // Add more images as needed
      ]
    }
  ];

  verDetalleCuarto(room: cuarto) {
    this.cuartoSeleccionado = room;
    this.verCuarto = true;
  }

  cerrarDetalleCuarto() {
    this.verCuarto = false;
    this.cuartoSeleccionado = null;
  }
}