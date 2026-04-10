import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HightlightCompletedTodo } from '../../directives/hightlight-completed-todo';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HightlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}

