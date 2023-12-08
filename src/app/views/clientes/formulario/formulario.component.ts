import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { idadeValidator } from 'src/app/validators/idade.validator';
import { nomeValidator } from 'src/app/validators/nome.validator';
import { cpfValidator } from 'src/app/validators/cpf.validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, nomeValidator()]],
      cpf: ['', [Validators.required, cpfValidator()]],
      dataNascimento: ['', [Validators.required, idadeValidator()]],
      rendaMensal: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataCadastro: ['', Validators.required],
    });
  }

  redirect(): void {
    this.router.navigateByUrl('clientes');
  }

  onSubmit() {
    console.log(this.form);
    this.router.navigateByUrl('clientes');
  }

  getErrorMessage(controlName: string, labelName?: string): string {
    const formControl = this.form.get(controlName);

    if (formControl?.touched) {
      const customErrors = ['nomeInvalido', 'cpfInvalido', 'idadeInvalida'];

      switch (true) {
        case formControl?.hasError('required'):
          return `${labelName} é obrigatório`;
        case formControl?.hasError('email'):
          return 'E-mail inválido';
        case customErrors.some((error) => formControl?.hasError(error)):
          return formControl.errors?.['message'];
      }
    }

    return '';
  }
}
