import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { IDatosPersonales } from '../../models/i-datos-personales';
import { IsobreMi } from '../../models/isobre-mi';
import { SobreMiService } from '../../services/sobre-mi-service';
import { DatosPersonales } from '../../services/datos-personales';

@Component({
  selector: 'app-sobre-mi',
  imports: [Header, Footer],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi implements OnInit {

  datosPersonales:IDatosPersonales = {
    id: 0,
    nombre: '',
    titulo: '',
    institucion: '',
    descripcion: '',
    foto: '',
    email: '',
    telefono: 0,
    linkedin: '',
    github: '',
    descripcionFooter: ''
  }

  sobreMi: IsobreMi[] = [];
   cargando = true;
   error: string | null = null;

  private sobreMiService = inject(SobreMiService);
    private datosService = inject(DatosPersonales);



  ngOnInit(): void {
    this.sobreMiService.obtenerInfo().subscribe({
       next:(data:any) =>
       {
        this.sobreMi= data;
        this.cargando = false;
        console.log(this.sobreMi);
       },
        error:(err) => {
        this.error = 'No se pudo cargar la información';
        this.cargando = false;
      }


    })
     this.datosService.obtenerDatos().subscribe({
       next:(data:any) =>
       {
        this.datosPersonales= data;
        this.cargando = false;
        console.log(this.datosPersonales);
       },
        error:(err) => {
        this.error = 'No se pudo cargar los datos';
        this.cargando = false;
      }


    })
    
  }

}
