import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumen',
  imports: [],
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
}
