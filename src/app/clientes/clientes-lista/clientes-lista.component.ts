import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[];
  clienteSelecionado: Cliente;
  mensagemErro: String;
  mensagemSucesso: String;

  constructor(private clienteService: ClientesService, private router: Router) {
    this.clienteSelecionado = new Cliente();
    this.clientes = [];
  }

  ngOnInit(): void {
    this.clienteService
      .getClientes()
      .subscribe(response => this.clientes = response);
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form']);
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.clienteService.deletar(this.clienteSelecionado.id)
      .subscribe({
        next: (value) => {
          this.mensagemSucesso = "Cliente deletado com sucesso!"
          this.ngOnInit();
        },
        error: (err) => this.mensagemErro = "Falha ao deletar cliente"
      });
  }

}
