import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemComponent;
  let fixture: ComponentFixture<ListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemComponent],
    });
    fixture = TestBed.createComponent(ListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`#${ListagemComponent.prototype.changePage.name} should change page corret when changed offset`, () => {
    const offset = 1;

    component.changePage(offset);

    expect(component.currentPage).toBe(2);
    expect(component.disablePrevButton).toBe(false);
    expect(component.disableNextButton).toBe(false);
  });
});
