import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/libro.model';

@Injectable({
  providedIn: 'root',
})
export class LibrosServiceTsService {
  private librosList$: Libro[] = [
    {
      id: 1,
      titulo: 'Harry Poter y la piedra filosofal',
      autor: 'JK Rowling',
    },
    {
      id: 2,
      titulo: 'La bella y la Bestia',
      autor: 'Hermanos Grimm',
    },
    {
      id: 3,
      titulo: 'El señor de los anillos',
      autor: 'Tolkien',
    },
    {
      id: 4,
      titulo: 'Los juegos del hambre',
      autor: 'Suzanne Collins',
    },
  ];
  constructor(private http: HttpClient) {}

  getLibros(): Libro[] {
    return this.librosList$;
  }

  getLibro(id: number) {
    return this.librosList$.find((libro) => libro.id === id);
  }

  subirLibro(libroNuevo: Libro): void {
    // subimos el libro nuevo a la lista
    this.librosList$.push(libroNuevo);
  }

  actualizarLibro(libroActualizado: Libro): void {
    // buscamos el indice del libro actualizado
    const indice = this.librosList$.findIndex(
      (libro) => libro.id === libroActualizado.id
    );
    //si existe ¿se hacen estas comprobaciones en angular?
    if (indice) {
      //cojo el elemnto de la lsita con ese indice
      //e injecto el nuevo
      this.librosList$[indice] = libroActualizado;
    }
  }
}
