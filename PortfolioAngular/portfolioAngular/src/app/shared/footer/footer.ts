import { Component, inject, OnInit } from '@angular/core';
import { IDatosPersonales } from '../../models/i-datos-personales';
import { DatosPersonales } from '../../services/datos-personales';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit{


  datos:IDatosPersonales = {
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
  };
  cargando = true;
  error: string | null = null;

  
  private  datosPersonales2= inject(DatosPersonales);
  
   ngOnInit(): void {
    this.datosPersonales2.obtenerDatos().subscribe({
      next:(data:any) =>
      {
        this.datos = data;
        this.cargando = false;
        console.log(this.datos);
      },
      error:(err) => {
        this.error = 'No se pudo cargar los datos personales';
        this.cargando = false;
      }
    })
      }
 

}
