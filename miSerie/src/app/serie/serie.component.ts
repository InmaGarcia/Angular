import { Component, OnInit } from '@angular/core';
import { SerieService } from '../service/serie.service';
import { Serie } from '../model/serie';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie',
  imports: [CommonModule],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css',
})
export class SerieComponent implements OnInit {
  serie$ = new Observable<Serie>();
  constructor(private servicio: SerieService) {}
  ngOnInit(): void {
    this.serie$ = this.servicio.getSerie();
  }
}
