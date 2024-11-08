import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy {
  // Array de objetos para imágenes, textos y botones
  slides = [
    {
      imagen: '/assets/img/1.jpg',
      texto: 'Cuartos agradables',
      botonTexto: 'Saber más'
    },
    {
      imagen: '/assets/img/2.jpg',
      texto: 'Restautante y comida deliciosa',
      botonTexto: 'Saber más'
    },
    {
      imagen: '/assets/img/3.jpg',
      texto: 'Estancias mas comodas',
      botonTexto: 'Saber más'
    }
  ];

  // Índice de la imagen actualmente mostrada
  indiceActual: number = 0;

  // Variable para almacenar el intervalo automático
  intervaloAutomatico: any;
  constructor(private router: Router){
    
  }

  ngOnInit(): void {
    // Inicializar el cambio automático de imagen cada 6 segundos
    this.iniciarCambioAutomatico();
  }

  // Función para iniciar el cambio de imagen automático
  iniciarCambioAutomatico(): void {
    this.intervaloAutomatico = setInterval(() => {
      this.cambiarImagenSiguiente();
    }, 6000); // Cambiar cada 6000 ms (6 segundos)
  }

  // Cambia a la siguiente imagen en el array
  cambiarImagenSiguiente(): void {
    this.indiceActual = (this.indiceActual + 1) % this.slides.length;
  }

  // Cambia a la imagen anterior en el array
  cambiarImagenAnterior(): void {
    this.indiceActual = (this.indiceActual - 1 + this.slides.length) % this.slides.length;
  }

  // Cambia a una imagen específica al hacer clic en un indicador
  cambiarImagen(indice: number): void {
    this.indiceActual = indice;
    this.detenerCambioAutomatico(); // Detiene el cambio automático al seleccionar una imagen específica
    this.iniciarCambioAutomatico(); // Reinicia el cambio automático
  }

  // Función para detener el cambio automático de imagen
  detenerCambioAutomatico(): void {
    if (this.intervaloAutomatico) {
      clearInterval(this.intervaloAutomatico);
    }
  }

  ngOnDestroy(): void {
    // Detener el cambio automático al destruir el componente
    this.detenerCambioAutomatico();
  }

  cambioACuartos(){
    this.router.navigate(['/cuartos']);
  }
}