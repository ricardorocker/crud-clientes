import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;

    if (!cpf) return null;

    if (cpf.length !== 11) {
      return {
        cpfInvalido: true,
        message: 'CPF deve conter 11 dígitos.',
      };
    } else if (/^(\d)\1+$/.test(cpf)) {
      return {
        cpfInvalido: true,
        message: 'CPF inválido (todos os dígitos são iguais).',
      };
    } else {
      return null;
    }
  };
}
