import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LibrosServiceTsService } from '../services/libros-service.ts.service';
import { Router } from '@angular/router';
import { Libro } from '../model/libro.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-nuevo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libro-nuevo.component.html',
  styleUrl: './libro-nuevo.component.css',
})
export class LibroNuevoComponent {
  lista: Libro[] = [];
  libroNuevo: Libro = { id: 0, titulo: '', autor: '' };
  titulo: string = '';
  autor: string = '';
  id: number = 0;

  constructor(
    private servicioLibro: LibrosServiceTsService,
    private router: Router
  ) {}
  alta() {
    this.lista = this.servicioLibro.getLibros();
    this.id = Number(this.lista.length);
    this.libroNuevo = { id: this.id, titulo: this.titulo, autor: this.autor };
    this.servicioLibro.subirLibro(this.libroNuevo);
    this.router.navigate(['/libros']);
  }
  volver() {
    this.router.navigate(['/libros']);
  }
}
