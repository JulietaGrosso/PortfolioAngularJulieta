import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Formulario } from './features/formulario/formulario';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'formulario/:id', component: Formulario, data: { prerender: false }}
    
];

