import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FormularioReservacionComponent } from './components/formulario-reservacion/formulario-reservacion.component';
import { FormNewComponent } from './components/form-new/form-new.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'carrusel', component: CarruselComponent },
      { path: 'slider', component: SliderComponent },
    ]
  },
  { path: 'head', component: EncabezadoComponent },

  { path: 'form', component: FormularioReservacionComponent },
  { path: 'form2', component: FormNewComponent },

];
