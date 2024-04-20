import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';


import { ClientesService } from "../../services/clientes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  success: boolean = false;
  errors: String[] = [];

  ngOnInit(): void { };

  constructor(private service: ClientesService, private router: Router) { };

  onSubmit(): void {
    this.service
      .salvar(this.cliente)
      .subscribe({
        next: (response: Cliente) => {
          this.success = true;
          this.errors = [];
          this.cliente = response;
        },
        error: (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.erros;
        }
      })
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-lista']);
  }
}
