import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/libro.model';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { LibrosServiceTsService } from '../services/libros-service.ts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css',
})
export class LibroDetalleComponent implements OnInit {
  // libro: Libro | undefined;
  libro?: Libro = { id: 0, titulo: '', autor: '' };

  constructor(
    private act: ActivatedRoute,
    private servicioLibro: LibrosServiceTsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = Number(this.act.snapshot.params['id']);
    this.libro = this.servicioLibro.getLibro(id);
    // throw new Error('Method not implemented.');
  }
  volver() {
    this.router.navigate(['/libros']);
  }
}
