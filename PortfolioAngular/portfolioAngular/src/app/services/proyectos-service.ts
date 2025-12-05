import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IProyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService{
[x: string]: any;
id: any;
  constructor(private http:HttpClient){}

obtenerProyectos(): Observable<IProyectos[]>{
    return this.http.get<IProyectos[]>(environment.MisProyectos).pipe(
      catchError((error: any) => {
        console.error('Error al cargar el archivo JSON', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON'));
      })
    );

  }

}
