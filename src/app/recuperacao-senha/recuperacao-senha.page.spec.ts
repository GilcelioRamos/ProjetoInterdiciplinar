import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperacaoSenhaPage } from './recuperacao-senha.page';

describe('RecuperacaoSenhaPage', () => {
  let component: RecuperacaoSenhaPage;
  let fixture: ComponentFixture<RecuperacaoSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperacaoSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
