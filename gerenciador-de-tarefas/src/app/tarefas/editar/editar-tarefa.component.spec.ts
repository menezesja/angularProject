import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarefaComponent } from './editar-tarefa.component';

describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*fixture = TestBed.createComponent(EditarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
  });

  xit('should create', () => { // Adicione o "x" antes do "it" para ignorar temporariamente
    expect(component).toBeTruthy();
  });
});
