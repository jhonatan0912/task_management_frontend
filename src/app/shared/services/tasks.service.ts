import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpAdapter } from '../adapters/http.adapter';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements HttpAdapter<Task[]> {

  API_URL: string = environment.API_URL;

  constructor(private readonly http: HttpClient) { }

  get(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/tasks`);
  }

  post<T>(body: any): Observable<Task[]> {
    throw new Error('Method not implemented.');
  }

  put<T>(body: any): Observable<Task[]> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
