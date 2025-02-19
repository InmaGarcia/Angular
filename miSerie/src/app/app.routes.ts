import { HomeComponent } from './home/home.component';
import { SerieComponent } from './serie/serie.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'serie', component: SerieComponent },
  { path: 'form', component: FormularioComponent },
  { path: '**', redirectTo: '/home' },
];
