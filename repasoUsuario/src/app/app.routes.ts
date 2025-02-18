import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'post', component: PostComponent },
  { path: '**', redirectTo: '/usuarios' },
];
