import { TodosStore } from './todos.store';
import { createTodo, Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  updateFilter(filter: VISIBILITY_FILTER) {
    console.log('Service => Filter is updated');
    this.todosStore.updateRoot({
      ui: { filter }
    });
  }


  complete({ id, completed }: Todo) {
    console.log('Service => Todo is completed');
    this.todosStore.update(id, {
      completed
    });
  }


  add(title: string) {
    console.log('Service => Added new todo');
    const todo = createTodo({ title });
    this.todosStore.add(todo);
    console.log('Service => Added new todo finish');
  }


  delete(id: ID) {
    console.log('Service => Todo is deleted');
    this.todosStore.remove(id);
  }

}
