import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { TarjetaProyecto } from "../../shared/tarjeta-proyecto/tarjeta-proyecto";
import { ProyectosService } from '../../services/proyectos-service';
import { Observable } from 'rxjs';
import { IProyectos } from '../../models/proyectos';

@Component({
  selector: 'app-mis-proyectos',
  imports: [Header, Footer, TarjetaProyecto],
  templateUrl: './mis-proyectos.html',
  styleUrl: './mis-proyectos.css',
})
export class MisProyectos implements OnInit{
  proyectos: IProyectos[] = [];
  cargando = true; 
  error: string | null = null; 

  private proyectosService = inject(ProyectosService);

  ngOnInit(){
    this.proyectosService.obtenerProyectos().subscribe
    ({
      next:(data) =>
      {
        this.proyectos = data;
        this.cargando = false;
        console.log(this.proyectos);

      },
       error: (err) => {
        this.error = 'No se pudieron cargar los proyectos';
         this.cargando = false;
      }

    })
  
  }
 

}




  