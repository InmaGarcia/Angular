import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LibrosComponent } from './libros/libros.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
];
