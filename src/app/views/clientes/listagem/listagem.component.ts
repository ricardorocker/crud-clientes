import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Filtros } from 'src/app/models/filtros';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  filtros: Filtros = {};
  clienteSelecionado?: Cliente | null;
  showCard: boolean = false;
  feedbackMessage: string = '';
  successMessage: boolean = true;
  currentPage$ = new BehaviorSubject<number>(1);
  currentPageData$!: Observable<any>;

  constructor(private router: Router, private clienteService: ClienteService) {
    this.currentPageData$ = this.currentPage$.pipe(
      switchMap((currentPage) =>
        this.clienteService.getPaginateData(currentPage)
      )
    );
  }

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    if (this.currentPage$.value > 1) {
      this.currentPage$.next(this.currentPage$.value - 1);
    }
  }

  filtrar(): void {
    this.currentPageData$ = this.clienteService.filter(this.filtros);
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
        this.currentPageData$ = this.currentPage$.pipe(
          switchMap((currentPage) =>
            this.clienteService.getPaginateData(currentPage)
          )
        );
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
