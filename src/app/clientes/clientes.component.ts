import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { ClienteModel } from '../cliente.model';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ ClientesService ]
})
export class ClientesComponent implements OnInit {

  clientes: Array<any> = new Array();
  cliente: ClienteModel = new ClienteModel();

  public data: any = new Date();

  public formulario: FormGroup = new FormGroup({
    "cpf": new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    "nome": new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    "sexo": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(9)]),
    "dat_nasc": new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    "email":new FormControl(null, [Validators.required, Validators.minLength(15), Validators.maxLength(30)]),
    "phone": new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
  });
  

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.listar();
  }

  atualizar(id: number) {
    this.clientesService.atualizarClientes(id, this.formulario.value).subscribe((cliente) => { 
      this.cliente = new ClienteModel();
      this.listar();
    }
    , (err: any) => console.log('Erro ao atualizar os clientes', err))
  }

  remover(id: number) {
    this.clientesService.removerClientes(id).subscribe((cliente) => {
      this.cliente = new ClienteModel();
      this.listar();
    }
    , (err: any) => console.log('Erro ao remover o cliente', err))
  }

  cadastrar(){
    this.clientesService.cadastrarClientes(this.formulario.value).subscribe((cliente: any) => {
      this.cliente = new ClienteModel();
      this.listar();
    }
    , (err) => console.log('Erro ao cadastrar os clientes', err))
  }
      
  listar(): void {
    this.clientesService.listarClientes().subscribe((clientes: any) => 
    this.clientes = clientes
    , (err) => console.log('Erro ao listar os clientes', err))
  }
}
