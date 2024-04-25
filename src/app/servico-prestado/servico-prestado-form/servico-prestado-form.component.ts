import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../services/clientes.service';
import { ServicoPrestadoService } from '../../services/servico-prestado.service';
import { ServicoPrestado } from '../ServicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.css'
})
export class ServicoPrestadoFormComponent implements OnInit {

  servicoPrestado: ServicoPrestado;
  success: boolean = false;
  clientes: Cliente[];
  errors: String[];

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.servicoPrestado = new ServicoPrestado();
    this.success = false;
    this.clientes = [];
    this.errors = []
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
    this.servicoPrestadoService
      .salvar(this.servicoPrestado)
      .subscribe({
        complete: () => {
          this.success = true;
          this.errors = [];
          this.servicoPrestado = new ServicoPrestado();
        },
        error: (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.erros;
        }
      })
  }
}
