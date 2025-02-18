import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  imports: [FormsModule, CommonModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent {
  @Input()
  serie: string = '';
  @Input()
  email: string = '';
  @Input()
  nombre: string = '';

  valoracion: string = '';

  @Output()
  selected = new EventEmitter<string>();

  enviarV() {
    this.selected.emit(this.valoracion);
  }
}
