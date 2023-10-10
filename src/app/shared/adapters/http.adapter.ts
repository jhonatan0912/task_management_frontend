import { Observable } from "rxjs";

export interface HttpAdapter<T> {
  get(): Observable<T[]>;
  post(body: T): Observable<T>;
  patch(id: number, body: T): Observable<T>;
  delete(id: number): Observable<void>;
}