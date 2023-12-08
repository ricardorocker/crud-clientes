import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sobrenomeValidator',
})
export class SobrenomeValidatorPipe implements PipeTransform {
  transform(value: string): boolean {
    return value.trim().split(' ').length > 1;
  }
}
