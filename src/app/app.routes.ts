import { Routes } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    { path: ' ', component: HomeComponent },
    { path: 'clientes', component: ClientesComponent }
]