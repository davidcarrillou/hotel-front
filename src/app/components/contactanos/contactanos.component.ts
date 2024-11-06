import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.pattern('^[0-9]*$')]],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario
    }
  }

  // Helpers para las validaciones
  get f() { return this.contactForm.controls; }
}