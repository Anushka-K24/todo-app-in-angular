import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        SrNo: 1,
        title: 'To check cowin website',
        desc: 'Something something',
        active: true,
      },
      {
        SrNo: 2,
        title: 'This is title 2',
        desc: 'Something something part 2',
        active: true,
      },
      {
        SrNo: 3,
        title: 'This is title 3',
        desc: 'Something something part 3',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.push(todo);
  }
}
