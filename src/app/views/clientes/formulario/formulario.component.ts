import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SobrenomeValidatorPipe } from 'src/app/pipes/sobrenome-validator.pipe';
import { CpfValidatorPipe } from 'src/app/pipes/cpf-validator.pipe';
import { idadeValidator } from 'src/app/validators/idade.validator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [SobrenomeValidatorPipe, CpfValidatorPipe],
})
export class FormularioComponent {
  form: FormGroup;
  maskDataNascimento = "/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/";

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
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
}
