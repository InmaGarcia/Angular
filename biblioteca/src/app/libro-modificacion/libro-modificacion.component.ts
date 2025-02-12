import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosServiceTsService } from '../services/libros-service.ts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Libro } from '../model/libro.model';

@Component({
  selector: 'app-libro-modificacion',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importar FormsModule para usar [(ngModel)]
  templateUrl: './libro-modificacion.component.html',
  styleUrl: './libro-modificacion.component.css',
})
export class LibroModificacionComponent implements OnInit {
  libro: Libro = { id: 0, titulo: '', autor: '' }; // Inicializar el libro

  constructor(
    private act: ActivatedRoute,
    private servicioLibro: LibrosServiceTsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del libro desde la ruta
    const id = Number(this.act.snapshot.params['id']);
    // Obtener el libro del servicio
    let libroEncontrado = this.servicioLibro.getLibro(id);
    console.log(libroEncontrado);
    if (libroEncontrado) {
      this.libro = libroEncontrado;
    } else {
      // Si no se encuentra el libro, redirigir al listado
      this.router.navigate(['/libros']);
    }
  }

  guardar(): void {
    // Lógica para guardar los cambios del libro
    this.servicioLibro.actualizarLibro(this.libro);
    // Redirigir al listado de libros
    this.router.navigate(['/libros']);
  }

  volver(): void {
    // Redirigir al listado de libros
    this.router.navigate(['/libros']);
  }
}
