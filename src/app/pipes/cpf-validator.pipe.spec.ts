import { CpfValidatorPipe } from './cpf-validator.pipe';

describe('CpfValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new CpfValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
