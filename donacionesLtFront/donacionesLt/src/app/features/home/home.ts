import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { IInstitucion } from '../../models/i-institucion';
import { InstitucionService } from '../../services/institucion-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home{
  
  constructor(route:ActivatedRoute) {
  route.params.subscribe(val => {
    this.cargarInstituciones();
  });
}
  institucion:IInstitucion[] = [];
  cargando = true;
  error: string | null = null;

  private institucion2 = inject(InstitucionService);


  cargarInstituciones(): void {
    this.institucion2.obtenerInstituciones().subscribe({
       next:(data:any) =>
       {
        this.institucion = data;
        this.cargando = false;
        console.log(this.institucion);
       },
       error:(err) => {
        this.error = 'No se pudo cargar las instituciones';
        this.cargando = false;
       }
    })
       }
  
 
}
