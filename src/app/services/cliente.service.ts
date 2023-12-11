import { HttpClient, HttpParams } from '@angular/common/http';
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

  getPaginateData(page: number, clientsPerPage: number): Observable<Cliente[]> {
    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', clientsPerPage.toString());
    return this.http.get<Cliente[]>(this.apiUrl, { params });
  }

  getById(idCliente: number): Observable<Cliente | {}> {
    return this.getAll().pipe(
      map((clientes: Cliente[]) => {
        const cliente = clientes.find((c: Cliente) => c.id === idCliente);
        return cliente || {};
      })
    );
  }

  update(idCliente: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${idCliente}`, cliente);
  }

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  delete(idCliente: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiUrl}/${idCliente}`);
  }

  filter(filtros: any): Observable<Cliente[]> {
    return this.getAll().pipe(
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
