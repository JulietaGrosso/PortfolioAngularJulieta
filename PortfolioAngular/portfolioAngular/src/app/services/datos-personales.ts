import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatosPersonales {
  constructor(private http:HttpClient){}

  obtenerDatos(): Observable<DatosPersonales>{
    return this.http.get<DatosPersonales>(environment.datosPersonales).pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }
  
}



    