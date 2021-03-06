import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'unit-testing';
  todoItems: string[] = [];
  todoItem: string = '';

  ngOnInit() {}

  addTodoItem() {
    if (this.todoItem) {
      this.todoItems.push(this.todoItem);
      this.todoItem = '';
    } else {
      throw new Error('Cannot add an empty list item. ');
    }
  }

  deleteTodoItem(item: string) {
    if (this.todoItems.indexOf(item) === -1) {
      throw new Error('Trying to delete item that does not exist. ');
    } else {
      this.todoItems.splice(this.todoItems.indexOf(item), 1);
    }
  }
}
