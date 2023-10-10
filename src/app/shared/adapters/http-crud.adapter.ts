import { Observable } from "rxjs";

export interface HttpCrudAdapter<T> {
  get(): Observable<T[]>;
  getById(id: number): Observable<T>;
  post(body: T): Observable<T>;
  patch(id: number, body: T): Observable<T>;
  delete(id: number): Observable<void>;
}