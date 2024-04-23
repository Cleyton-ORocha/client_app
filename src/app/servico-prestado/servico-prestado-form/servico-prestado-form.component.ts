import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.css'
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClientesService,
  ) { }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe({
        next: response => this.clientes = response,
        error: response => console.log(response)
      })
  }

  onSubmit(): void {
    console.log('submit')
  }

}
