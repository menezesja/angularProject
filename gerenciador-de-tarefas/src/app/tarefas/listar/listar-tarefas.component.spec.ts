import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefasComponent } from './listar-tarefas.component';

describe('ListarTarefaComponent', () => {
  let component: ListarTarefasComponent;
  let fixture: ComponentFixture<ListarTarefasComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*fixture = TestBed.createComponent(ListarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
  });

  xit('should create', () => { // Adicione o "x" antes do "it" para ignorar temporariamente
    expect(component).toBeTruthy();
  });
});
