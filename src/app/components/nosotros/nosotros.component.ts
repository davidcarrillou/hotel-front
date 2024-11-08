import { Component } from '@angular/core';
import { CuartosComponent } from "../cuartos/cuartos.component";

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
     CuartosComponent,
    ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})

export class NosotrosComponent {

}
