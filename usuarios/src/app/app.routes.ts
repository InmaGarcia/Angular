import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { HomeComponent } from './home/home.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: ListadoUsuariosComponent },
  { path: 'detalle/:id', component: DetalleUsuarioComponent },
  { path: '**', redirectTo: '/home' },
];
