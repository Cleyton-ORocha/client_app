import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrl: './clientes-lista.component.css'
})
export class ClientesListaComponent implements OnInit{
  
  clientes: Cliente[] = [];
  
  constructor(private clienteService: ClientesService){
    
  }

  ngOnInit(): void {
  }

}
