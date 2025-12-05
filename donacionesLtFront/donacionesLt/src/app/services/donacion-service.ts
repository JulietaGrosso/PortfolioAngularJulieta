import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IDonacion } from '../models/i-donacion';
import { ILinkPago } from '../models/ilink-pago';

@Injectable({
  providedIn: 'root',
})
export class DonacionService {
  constructor(private http:HttpClient){}

  obtenerDonaciones(): Observable<DonacionService>{
    return this.http.get<DonacionService>(environment.donacionUrl).pipe(
          catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
    );
  }

  guardarDonacion(donacion: IDonacion){
    return this.http.post<ILinkPago>(environment.donacionUrl, donacion).pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })

      );
  }




}
