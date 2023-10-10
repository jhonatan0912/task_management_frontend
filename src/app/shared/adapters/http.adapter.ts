import { Observable } from "rxjs";

export interface HttpAdapter<T> {
  get(): Observable<T>;
  post(body: any): Observable<T>;
  patch(id: number, body: any): Observable<T>;
  delete(id: number): Observable<void>;
}
