import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service/todo-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: any[] = [];
  dataSource = new MatTableDataSource<any>();

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
      this.dataSource.data = data;
    });
  }
}
