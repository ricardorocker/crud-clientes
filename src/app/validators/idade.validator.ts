import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function idadeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dataNascimento = control.value;

    if (!dataNascimento) return null;

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth() + 1;

    const aniversarioOcorrido =
      mesAtual > nascimento.getMonth() + 1 ||
      (mesAtual === nascimento.getMonth() + 1 &&
        hoje.getDate() >= nascimento.getDate() + 1);

    if (idade >= 18 && idade < 60 && aniversarioOcorrido) {
      return null;
    } else {
      return { idadeInvalida: true };
    }
  };
}
