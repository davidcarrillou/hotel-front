import { Component } from '@angular/core';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  ngAfterViewInit() {
    // Inicializar el Carrusel de Bootstrap
    const elementoCarrusel = document.querySelector('#carruselEjemploConSubtitulos')
    const carrusel = new Carousel(elementoCarrusel, {
      interval: 5500,
      touch: false
    })
  }
}
