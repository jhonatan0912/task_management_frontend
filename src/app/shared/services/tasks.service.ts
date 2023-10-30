import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpCrudAdapter } from '../adapters/http-crud.adapter';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements HttpCrudAdapter<Task> {

  API_URL: string = environment.API_URL;

  constructor(
    private readonly http: HttpClient
  ) { }

  get(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/tasks`);
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.API_URL}/tasks/${id}`);
  }

  post(body: any): Observable<Task> {
    return this.http.post<Task>(`${this.API_URL}/tasks`, body);
  }

  patch(id: string, body: any): Observable<Task> {
    return this.http.patch<Task>(`${this.API_URL}/tasks/${id}`, body);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/tasks/${id}`);
  }
}
