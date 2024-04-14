import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private Http : HttpClient) { }

  getCliente():Cliente{
    let cliente: Cliente = new Cliente();
    return cliente; 
  }
}
