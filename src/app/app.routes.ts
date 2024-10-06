import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FormularioReservacionComponent } from './components/formulario-reservacion/formulario-reservacion.component';
import { FormNewComponent } from './components/form-new/form-new.component';

export const routes: Routes = [
    {path: 'inicio', component:InicioComponent},
    {path: 'head', component:EncabezadoComponent},
    {path: 'carrusel', component:CarruselComponent},
    {path: 'form', component:FormularioReservacionComponent},
    {path: 'form2', component:FormNewComponent},
];
