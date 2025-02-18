import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  nombre: string = 'Inmaculada García García';
  descripcion: string = 'Alumna de 2ºDAW';

  constructor(private router: Router) {}
  irSerie() {
    this.router.navigate(['/serie']);
  }

  irForm() {
    this.router.navigate(['/form']);
  }
}
