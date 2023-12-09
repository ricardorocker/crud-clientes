import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { idadeValidator } from 'src/app/validators/idade.validator';
import { nomeValidator } from 'src/app/validators/nome.validator';
import { cpfValidator } from 'src/app/validators/cpf.validator';
import { ClienteService } from 'src/app/services/cliente.service';
import { catchError, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  showCard: boolean = false;
  idCliente?: number;
  sub: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, nomeValidator()]],
      cpf: ['', [Validators.required, cpfValidator()]],
      dataNascimento: ['', [Validators.required, idadeValidator()]],
      rendaMensal: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataCadastro: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.idCliente = +params['id'];
      if (this.idCliente) {
        this.clienteService
          .getById(this.idCliente)
          .pipe(
            tap((cliente) => {
              this.form.patchValue(cliente);
            })
          )
          .subscribe(() => this.form.get('cpf')?.disable());
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.clienteService
        .save(this.form.value)
        .pipe(
          switchMap(() => {
            this.showCard = true;
            return of(null);
          }),
          catchError((error) => {
            console.log('Erro ao adicionar cliente: ', error);
            return of(null);
          })
        )
        .subscribe();
    } else {
      Object.values(this.form.controls).forEach((control: AbstractControl) => {
        control.markAsTouched();
      });
    }
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

  onCardClick() {
    this.router.navigateByUrl('clientes');
  }

  onOverlayClick(event: Event) {
    event.stopPropagation();
  }
}
