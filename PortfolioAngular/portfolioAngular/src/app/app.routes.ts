import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { SobreMi } from './features/sobre-mi/sobre-mi';
import { MisProyectos } from './features/mis-proyectos/mis-proyectos';

export const routes: Routes = [
    {path: '', component: Home   },
    {path: 'sobremi', component: SobreMi},
    {path: 'misproyectos', component: MisProyectos},
];
