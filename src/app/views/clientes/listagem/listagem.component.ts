import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  clientes = [
    {
      id: 1,
      nome: 'Ricardo Santos Rocker',
      cpf: '442.672.838-00',
      dataNascimento: '04/09/1995',
      rendaMensal: 24400,
      email: 'ricardo.santos.rocker@gmail.com',
      dataCadastro: '08/12/2023',
    },
    {
      id: 2,
      nome: 'Petrucia Lira Soares',
      cpf: '121.672.458-00',
      dataNascimento: '18/10/1997',
      rendaMensal: 17400,
      email: 'lira.petrucia@gmail.com',
      dataCadastro: '09/12/2023',
    },
  ];

  constructor(private router: Router) {}

  redirect(): void {
    this.router.navigate(['/clientes/formulario']);
  }
}
