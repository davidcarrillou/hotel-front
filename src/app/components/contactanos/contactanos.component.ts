import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SystemService } from '../../service/system.service';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  mensajeHabitaciondisponible: string = '';
  mensajeError: string = '';
  mensajeExito: string = '';

  constructor(private fb: FormBuilder,private systemService: SystemService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.pattern('^[0-9]*$')]],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
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

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario
      this.systemService.setMensajeExito("Se a enviado la informacion")
    }
  }

  // Helpers para las validaciones
  get f() { return this.contactForm.controls; }
}