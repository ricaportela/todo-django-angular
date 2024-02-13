import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoServiceService) {}
  ngOnInit() {
    // Chamar o serviço para obter os dados
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
    });
  }
}
