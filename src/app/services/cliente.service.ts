import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private aprUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.aprUrl);
  }

  getById(idCliente: number): Observable<Cliente | null> {
    return this.getAll().pipe(
      map((clientes: Cliente[]) => {
        const cliente = clientes.find((c: Cliente) => c.id === idCliente);
        return cliente || null;
      })
    );
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put(this.aprUrl, cliente);
  }

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<any>(this.aprUrl, cliente);
  }

  delete(): Observable<any> {
    return this.http.delete(this.aprUrl);
  }
}
