import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  constructor(private router: Router) {}

  redirect(): void {
    this.router.navigateByUrl('clientes');
  }
}
