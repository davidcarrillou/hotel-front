import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SystemService } from '../../service/system.service';

@Component({
  selector: 'app-formulario-reservacion',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './formulario-reservacion.component.html',
  styleUrl: './formulario-reservacion.component.css'
})
export class FormularioReservacionComponent {
  reservaForm: FormGroup;

  constructor(private fb: FormBuilder, private systemService: SystemService) {
    this.reservaForm = this.fb.group({
      nombre: ['', Validators.required],
      llegada: ['', Validators.required],
      salida: ['', Validators.required],
      adultos: ['1', Validators.required],
      children: ['0', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      console.log(this.reservaForm.value);
      // Here you would typically send the form data to your backend
      this.systemService.setMensajeExito("Se encontraron habitaciones disponibles, continuar la reservacion aqui: ")
    }
  }
}
