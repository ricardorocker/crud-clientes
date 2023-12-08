import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfValidator',
})
export class CpfValidatorPipe implements PipeTransform {
  transform(value: string): string {
    let cpfStatus = 'válido';

    if (value.length !== 11) {
      cpfStatus = 'CPF deve conter 11 dígitos.';
    }

    if (value.length == 11 && /^(\d)\1+$/.test(value)) {
      cpfStatus = 'CPF inválido (todos os dígitos são iguais).';
    }

    return cpfStatus;
  }
}
