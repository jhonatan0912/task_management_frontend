import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpAdapter } from '../adapters/http.adapter';
import { TaskResponse } from '../interfaces/tasks-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements HttpAdapter<TaskResponse[]> {

  API_URL: string = environment.API_URL;

  constructor(private readonly http: HttpClient) { }

  get(): Observable<TaskResponse[]> {
    return this.http.get<TaskResponse[]>(`${this.API_URL}/tasks`);
  }

  post<T>(body: any): Observable<TaskResponse[]> {
    throw new Error('Method not implemented.');
  }

  put<T>(body: any): Observable<TaskResponse[]> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
