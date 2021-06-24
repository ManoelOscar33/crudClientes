import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from '../cliente.model';
import { tap } from 'rxjs/operators';

@Injectable()
export class ClientesService {

    constructor(private http: HttpClient) {}

    cadastrarClientes(cliente: ClienteModel): Observable<any> {
        return this.http.post('http://localhost:3000/clientes/', cliente);
    }

    listarClientes(): Observable<any> {
        return this.http.get('http://localhost:3000/clientes/')
            .pipe(
                tap(console.log)
            );
    }
    
    atualizarClientes(id: any, cliente:ClienteModel): Observable<any> {
        return this.http.put('http://localhost:3000/clientes/'.concat(id), cliente);
    }

    removerClientes(id: any): Observable<any> {
        return this.http.delete('http://localhost:3000/clientes/'.concat(id));
    }

}