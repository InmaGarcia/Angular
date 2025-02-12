import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { LibroModificacionComponent } from './libro-modificacion/libro-modificacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libro/:id', component: LibroDetalleComponent },
  { path: 'modiff/:id', component: LibroModificacionComponent },
  { path: 'libroNuevo', component: LibroNuevoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];
