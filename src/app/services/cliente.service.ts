import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getById(idCliente: number): Observable<Cliente | null> {
    return this.getAll().pipe(
      map((clientes: Cliente[]) => {
        const cliente = clientes.find((c: Cliente) => c.id === idCliente);
        return cliente || null;
      })
    );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.apiUrl, cliente);
  }

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  delete(): Observable<Cliente> {
    return this.http.delete<Cliente>(this.apiUrl);
  }

  filter(filtros: any): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl).pipe(
      map((clientes) => {
        return clientes.filter((cliente: any) => {
          return Object.keys(filtros).every((key) => {
            const filterValue = filtros[key]?.toLowerCase();
            const clienteValue = String(cliente[key]).toLowerCase();
            return clienteValue.includes(filterValue);
          });
        });
      })
    );
  }
}
