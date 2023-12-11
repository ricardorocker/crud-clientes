import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Filtros } from 'src/app/models/filtros';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  filtros: Filtros = {};
  clienteSelecionado?: Cliente | null;
  showCard: boolean = false;
  feedbackMessage: string = '';
  successMessage: boolean = true;
  currentPage: number = 1;
  currentPageData$!: Observable<any>;
  clientsPerPage: number = 6;
  field?: string;
  order?: string;
  ascButton: boolean = true;

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.currentPageData$ = this.clienteService.getPaginateData(
      this.currentPage,
      this.clientsPerPage,
      this.field,
      this.order,
      this.filtros
    );
  }

  nextPage() {
    this.currentPage += 1;
    this.loadData();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.loadData();
    }
  }

  filtrar(): void {
    this.currentPage = 1;
    this.loadData();
  }

  sort(field: string): void {
    this.ascButton ? (this.order = 'asc') : (this.order = 'desc');
    this.ascButton = !this.ascButton;
    this.field = field;

    if (this.currentPage !== 1) this.currentPage = 1;

    this.loadData();
  }

  selecionarCliente(cliente: Cliente): void {
    this.clienteSelecionado =
      this.clienteSelecionado === cliente ? null : cliente;
  }

  showFeedback(message: string, successMessage: boolean): void {
    this.feedbackMessage = message;
    this.successMessage = successMessage;
    this.showCard = true;
  }

  visualizar(): void {
    if (this.clienteSelecionado) {
      const clienteId = this.clienteSelecionado.id;
      this.router.navigate(['/clientes/formulario', clienteId]);
    } else {
      this.showFeedback('Selecione um cliente para visualiza-lo.', false);
    }
  }

  remover(): void {
    if (this.clienteSelecionado) {
      const clienteId = this.clienteSelecionado.id;
      this.clienteService.delete(clienteId).subscribe(() => {
        this.loadData();
        this.showFeedback('Cliente removido com sucesso!', true);
      });
    } else {
      this.showFeedback('Selecione um cliente para remove-lo.', false);
    }
  }

  onCardClick() {
    this.showCard = false;
  }

  onOverlayClick(event: Event) {
    event.stopPropagation();
  }
}
