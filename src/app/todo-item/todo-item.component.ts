import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: string = '';
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.delete.emit(this.item);
  }

}
