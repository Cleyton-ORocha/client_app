import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from "../../services/clientes.service";

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  success: boolean = false;
  errors: String[] = [];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { };

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id !== undefined) {
        this.service
          .getClienteById(this.id)
          .subscribe({
            next: (response: Cliente) => {
              this.cliente = response;
            },
            error: () => {
              this.cliente = new Cliente();
            }
          })
      }
    })
  };

  onSubmit(): void {

    if (this.id) {
      this.service
        .atualizar(this.cliente)
        .subscribe({
          next: (response: any) => {
            this.success = true;
            this.errors = [];
          },
          error: (err: any) => {
              this.errors = ['Erro ao atualizar o clientes'];
          },
        });
    }
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
