import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private aprUrl = ' http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.aprUrl);
  }

  getById(idCliente: number): Observable<any> {
    return this.getAll().pipe(
      map((data) => {
        const clientes = data.clientes || [];
        const cliente = clientes.find((c: any) => c.id === idCliente);
        return cliente || null;
      })
    );
  }

  update(cliente: any): Observable<any> {
    return this.http.put(this.aprUrl, cliente);
  }

  save(cliente: any): Observable<any> {
    return this.http.post<any>(this.aprUrl, cliente);
  }

  delete(): Observable<any> {
    return this.http.delete(this.aprUrl);
  }
}
