import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class InstitucionService {
  constructor(private http:HttpClient){}

  obtenerInstituciones(): Observable<InstitucionService>{
    return this.http.get<InstitucionService>(environment.institucionUrl).pipe(
       catchError((error: any) => {
                console.error('Error al cargar el archivo JSON', error);
                return throwError(() => new Error('No se pudo cargar el archivo JSON'));
                 })
    );
  }

}
