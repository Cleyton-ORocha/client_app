import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../services/clientes.service';
import { ServicoPrestado } from '../ServicoPrestado';
import { ServicoPrestadoService } from '../../services/servico-prestado.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrl: './servico-prestado-form.component.css'
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servicoPrestado: ServicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.servicoPrestado = new ServicoPrestado();
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
    this.servicoPrestadoService.salvar(this.servicoPrestado).subscribe({
      next: (response: ServicoPrestado) => this.servicoPrestado = response
    })
  }

}
