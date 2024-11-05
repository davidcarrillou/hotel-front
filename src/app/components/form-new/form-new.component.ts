import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-new',
  standalone: true,
  imports: [],
  templateUrl: './form-new.component.html',
  styleUrl: './form-new.component.css'
})
export class FormNewComponent {
 // Referencias a los elementos en el DOM
 @ViewChild('roomSelect') roomSelect!: ElementRef;
 @ViewChild('dropmenu') dropmenu!: ElementRef;
 @ViewChild('selected') selected!: ElementRef;
 @ViewChild('dotSwitch') dotSwitch!: ElementRef;
 @ViewChild('checkbox') input!: ElementRef;
 options!: NodeListOf<HTMLElement>;

 // Método que se ejecuta después de que la vista está inicializada
 ngAfterViewInit(): void {
   // Inicializar las opciones del menú desplegable
   if (this.dropmenu) {
     this.options = this.dropmenu.nativeElement.querySelectorAll('li');
   }
 }

 // Función para controlar el comportamiento del menú desplegable
 boton(): void {
   if (this.roomSelect && this.dropmenu && this.options.length > 0 && this.selected) {
     this.roomSelect.nativeElement.classList.toggle('select-clicked');
     this.dropmenu.nativeElement.classList.toggle('menu-open');

     this.options.forEach(option => {
       option.addEventListener('click', () => {
         this.selected.nativeElement.innerText = option.innerText;
         this.roomSelect.nativeElement.classList.remove('select-clicked');
         this.dropmenu.nativeElement.classList.remove('menu-open');

         this.options.forEach(option => {
           option.classList.remove('active');
         });

         option.classList.add('active');
       });
     });
   }
 }

 // Función para cambiar el estado del interruptor (switch)
 change(): void {
   if (this.dotSwitch && this.input) {
     this.dotSwitch.nativeElement.classList.toggle('swipe');

     if (this.dotSwitch.nativeElement.classList.contains('swipe')) {
       this.dotSwitch.nativeElement.setAttribute('data-state', 'checked');
       this.dotSwitch.nativeElement.setAttribute('aria-checked', 'true');
       this.input.nativeElement.setAttribute('checked', '');
     } else {
       this.dotSwitch.nativeElement.setAttribute('data-state', 'unchecked');
       this.dotSwitch.nativeElement.setAttribute('aria-checked', 'false');
       this.input.nativeElement.removeAttribute('checked');
     }
   }
 }
}