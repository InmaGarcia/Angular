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
    // obtener el ID del libro desde ruts
    const id = Number(this.act.snapshot.params['id']);
    // obtener el libro del servicio
    let libroEncontrado = this.servicioLibro.getLibro(id);
    //console.log(libroEncontrado); comprobacion
    if (libroEncontrado) {
      this.libro = libroEncontrado;
    } else {
      // si no está el libro me redirige a la lista
      this.router.navigate(['/libros']);
    }
  }

  guardar(): void {
    // me lleva al metodo que cambia el libro
    this.servicioLibro.actualizarLibro(this.libro);
    // redirigea la lista
    this.router.navigate(['/libros']);
  }

  volver(): void {
    this.router.navigate(['/libros']);
  }
}
