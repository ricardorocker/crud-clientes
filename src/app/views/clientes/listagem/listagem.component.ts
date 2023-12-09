import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Filtros } from 'src/app/models/filtros';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  clientes$: Observable<Cliente[]>;
  filtros: Filtros = {};
  clienteSelecionado?: Cliente | null;
  showCard: boolean = false;

  constructor(private router: Router, private clienteService: ClienteService) {
    this.clientes$ = this.clienteService.getAll();
  }

  filtrar(): void {
    this.clientes$ = this.clienteService.filter(this.filtros);
  }

  selecionarCliente(cliente: Cliente): void {
    this.clienteSelecionado =
      this.clienteSelecionado === cliente ? null : cliente;
  }

  visualizar(): void {
    if (this.clienteSelecionado) {
      const clienteId = this.clienteSelecionado.id;
      this.router.navigate(['/clientes/formulario', clienteId]);
    }
  }

  remover(): void {
    if (this.clienteSelecionado) {
      const clienteId = this.clienteSelecionado.id;
      this.clienteService.delete(clienteId).subscribe(() => {
        this.clientes$ = this.clienteService.getAll();
        this.showCard = true;
      });
    }
  }

  onCardClick() {
    this.showCard = false;
  }

  onOverlayClick(event: Event) {
    event.stopPropagation();
  }
}
