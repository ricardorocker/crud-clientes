import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nomeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nome = control.value;

    if (!nome) return null;

    if (nome.trim().split(' ').length > 1) {
      return null;
    } else {
      return {
        nomeInvalido: true,
        message: 'Nome Cliente deve possuir ao menos um sobrenome.',
      };
    }
  };
}
