import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  clientes$: Observable<Cliente[]>;

  constructor(private router: Router, private clienteService: ClienteService) {
    this.clientes$ = this.clienteService.getAll();
  }

  redirect(): void {
    this.router.navigate(['/clientes/formulario']);
  }
}
