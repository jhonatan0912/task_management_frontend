import { Observable } from "rxjs";

export interface HttpCrudAdapter<T> {
  get(): Observable<T[]>;
  getById(id: string): Observable<T>;
  post(body: T): Observable<T>;
  patch(id: string, body: T): Observable<T>;
  delete(id: string): Observable<void>;
}