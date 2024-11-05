import { Component, Input, Output, EventEmitter } from '@angular/core';
import { cuartoImagen } from '../../models/cuartoImagen';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-imagen-zoom',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './modal-imagen-zoom.component.html',
  styleUrl: './modal-imagen-zoom.component.css'
})
export class ModalImagenZoomComponent {
  @Input() images: cuartoImagen[] = [];
  @Input() currentIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  showThumbnails: boolean = true;
  isFullscreen: boolean = false;
  zoom: number = 1;

  get currentImage(): cuartoImagen {
    return this.images[this.currentIndex];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  toggleThumbnails() {
    this.showThumbnails = !this.showThumbnails;
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
  }

  zoomIn() {
    this.zoom = Math.min(this.zoom + 0.1, 3);
  }

  zoomOut() {
    this.zoom = Math.max(this.zoom - 0.1, 0.5);
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }
}