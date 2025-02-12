import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css',
})
export class ListadoUsuariosComponent implements OnInit {
  usuarios$ = new Observable<Usuario[]>();

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarios$ = this.usuarioService.getUsuarios();
  }
}
