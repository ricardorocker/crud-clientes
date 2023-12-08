import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [NgxMaskDirective],
})
export class FormularioComponent {
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      dataNascimento: [''],
      rendaMensal: [''],
      email: [''],
      dataCadastro: [''],
    });
  }

  redirect(): void {
    this.router.navigateByUrl('clientes');
  }

  onSubmit() {
    console.log(this.form.value);
    this.router.navigateByUrl('clientes');
  }
}
