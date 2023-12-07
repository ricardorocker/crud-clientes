import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  constructor(private router: Router) {}

  redirect(): void {
    this.router.navigate(['/clientes/formulario']);
  }
}
