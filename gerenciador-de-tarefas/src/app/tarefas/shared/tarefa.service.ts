import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] { //dados url/componente, valor null
    const tarefas = localStorage['tarefas']; //key
    return tarefas ? JSON.parse(tarefas) : []; //? operador if-else
  }

  cadastrar(tarefa: Tarefa): void { //cadastrar uma nova tarefa, dados gravados localmente
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime(); //gera timestamp
    tarefas.push(tarefa); //adiciona no final da lista
    localStorage['tarefas'] = JSON.stringify(tarefas); //guarda no localStorage
  }

  buscarPorId(id: number): Tarefa{ //realizar busca de tarefa
    const tarefas: Tarefa[] = this.listarTodos(); 
    return tarefas.find( tarefa => tarefa.id === id); //retorna id da tarefa
  }

  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id == obj.id){
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);

  }
}
