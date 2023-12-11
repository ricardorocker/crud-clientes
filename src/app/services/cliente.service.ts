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

  getPaginateData(
    page: number,
    clientsPerPage: number,
    field?: string,
    order?: string,
    filters?: any
  ): Observable<Cliente[]> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', clientsPerPage.toString())
      .set('_sort', field ? field : '')
      .set('_order', order ? order : '');

    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          params = params.set(`${key}_like`, filters[key]);
        }
      });
    }

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
}
