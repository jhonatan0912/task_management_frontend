import { Observable } from "rxjs";

export interface HttpAdapter<T> {
  get(): Observable<T>;
  post(body: any): Observable<T>;
  put(body: any): Observable<T>;
  delete(id: number): Observable<void>;
}
