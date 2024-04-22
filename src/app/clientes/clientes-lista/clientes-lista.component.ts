import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente = new Cliente();
  mensagemErro: String;
  mensagemSucesso: String;

  constructor(private clienteService: ClientesService, private router: Router) { }

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
