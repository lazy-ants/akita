import { Todo } from './todo.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from '../filter/filter.model';

export interface State extends EntityState<Todo> {
  ui: { filter: VISIBILITY_FILTER };
}

const initialState = {
  ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'todo-list' })
export class TodosStore extends EntityStore<State, Todo> {
  constructor() {
    super(initialState);
    console.log('Store => Store created with name: todo-list');
  }
}
