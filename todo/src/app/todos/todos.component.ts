import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './state';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos: Todo[];
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();
}
