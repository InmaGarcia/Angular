import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule, ResumenComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  serie: string = '';

  email: string = '';

  nombre: string = '';
  mensajeError: string = '';
  error: boolean = false;
  mostrarResumen: boolean = false;
  resumen() {
    if (this.email == '') {
      this.mensajeError = 'Por favor, introduce el correo.';
      this.error = true;
    } else {
      this.mensajeError = '';
      this.error = false;
      this.mostrarResumen = true;
    }
  }

  valor: string = '';
  valoracion(event: string) {
    this.valor = event;
  }
}
