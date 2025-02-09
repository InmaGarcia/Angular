import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'libro/:id', component: LibroDetalleComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];
