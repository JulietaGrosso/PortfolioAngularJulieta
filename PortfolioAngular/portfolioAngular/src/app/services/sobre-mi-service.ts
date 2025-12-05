import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IProyectos } from '../models/proyectos';
import { IDatosPersonales } from '../models/i-datos-personales';
import { IsobreMi } from '../models/isobre-mi';

@Injectable({
  providedIn: 'root',
})
export class SobreMiService{
[x: string]: any;
id: any;
  constructor(private http:HttpClient){}

obtenerInfo(): Observable<IsobreMi[]>{
    return this.http.get<IsobreMi[]>(environment.sobreMi).pipe(
      catchError((error: any) => {
        console.error('Error al cargar el archivo JSON', error);
        return throwError(() => new Error('No se pudo cargar el archivo JSON'));
      })
    );

  }

}
