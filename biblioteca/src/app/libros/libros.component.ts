import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LibrosServiceTsService } from '../services/libros-service.ts.service';
import { Libro } from '../model/libro.model';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent {
  libros: Libro[] = [];
  constructor(
    private servicioLibro: LibrosServiceTsService,
    private router: Router
  ) {
    this.libros = this.servicioLibro.getLibros();
  }

  add() {
    this.router.navigate(['/libroNuevo']);
  }
}
