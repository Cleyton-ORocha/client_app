import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: String = environment.apiURL + "/api/clientes";

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/api/clientes/${id}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL}`);
  }

  getClienteById( id: number ): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiURL}/${id}`);
  }
}
