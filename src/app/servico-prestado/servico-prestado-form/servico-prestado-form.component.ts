import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../services/clientes.service';
import { servicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.css'
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servicoPrestado: servicoPrestado;

  constructor(
    private clienteService: ClientesService,
  ) {
    this.servicoPrestado = new servicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe({
        next: response => this.clientes = response,
        error: response => console.log(response)
      })
  }

  onSubmit(): void {
    console.log(this.servicoPrestado)
  }

}
