import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
// Definir a URL da API
  private apiUrl = 'http://127.0.0.1:8000/api/todos/';

  constructor(private http: HttpClient) { }
  // Método para obter a lista de tarefas da API
  getTodos() {
    return this.http.get(this.apiUrl);
  }
}
