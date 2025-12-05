import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProyectos } from '../../models/proyectos';

@Component({
  selector: 'app-tarjeta-proyecto',
  imports: [],
  templateUrl: './tarjeta-proyecto.html',
  styleUrl: './tarjeta-proyecto.css',
})
export class TarjetaProyecto {

   @Input() proyecto!: IProyectos;
}
 
   

  
