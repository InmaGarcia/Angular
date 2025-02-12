import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-usuario',
  imports: [CommonModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css',
})
export class DetalleUsuarioComponent implements OnInit {
  usuario$ = new Observable<Usuario>();
  constructor(
    private act: ActivatedRoute,
    private servicioUsuario: UsuarioService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let id = this.act.snapshot.params['id'];
    this.usuario$ = this.servicioUsuario.getUsuarioId(id);
  }

  volver() {
    this.router.navigate(['/usuarios']);
  }
}
