import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarTarefaComponent } from './cadastrar-tarefa.component';

describe('CadastrarTarefaComponent', () => {
  let component: CadastrarTarefaComponent;
  let fixture: ComponentFixture<CadastrarTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarTarefaComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => { // Adicione o "x" antes do "it" para ignorar temporariamente
    expect(component).toBeTruthy();
  });

});
