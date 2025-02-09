import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LibrosServiceTsService } from '../services/libros-service.ts.service';
import { Libro } from '../model/libro.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = [];
  constructor(private servicioLibro: LibrosServiceTsService) {}

  ngOnInit(): void {
    this.libros = this.servicioLibro.getLibros();
    // throw new Error('Method not implemented.');
  }
}
