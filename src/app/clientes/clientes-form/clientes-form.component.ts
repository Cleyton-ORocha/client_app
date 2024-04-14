import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

import { ClientesService } from "../../services/clientes.service";

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrl: './clientes-form.component.css'
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  ngOnInit(): void { };

  constructor( private service : ClientesService) { 
  };

  onSubmit(){
    console.log(this.cliente)
  }

}
