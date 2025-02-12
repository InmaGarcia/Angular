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
  titulo: string = '';
  autor: string = '';
  id: number = 0;

  constructor(
    private servicioLibro: LibrosServiceTsService,
    private router: Router
  ) {}
  alta() {
    //traigo la lista
    this.lista = this.servicioLibro.getLibros();
    //el id del nuevo libro es la longitud de a lista +1
    this.id = Number(this.lista.length + 1);
    //creo el nuevo libro
    const libroNuevo: Libro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
    };
    console.log(libroNuevo);
    //lamo al servicio y le envio el libro nuevo
    this.servicioLibro.subirLibro(libroNuevo);
    this.router.navigate(['/libros']);
  }
  volver() {
    this.router.navigate(['/libros']);
  }
}
