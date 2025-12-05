import { Component, inject, OnInit } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { IDonacion } from '../../models/i-donacion';
import { DonacionService } from '../../services/donacion-service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { link } from 'fs';

@Component({
  selector: 'app-formulario',
  imports: [Header, Footer, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit{

  form =  new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        correo: new FormControl(''),
        monto: new FormControl(''),


    });
  
  private donacionService = inject(DonacionService);
    
    private idInstitucion:string | null = null;

   constructor(private activatedRoute: ActivatedRoute){}
   ngOnInit(): void {
       this.idInstitucion = this.activatedRoute.snapshot.paramMap.get('id')
          console.log("institucion es" + this.idInstitucion);
   }
    

   
      
  handleSubmit(){

    if(this.idInstitucion != null){
       const donacion: IDonacion = {
        id: 0,
        nombre: this.form.value.nombre ?? "",
        apellido: this.form.value.apellido ?? "",
        correo: this.form.value.correo ?? "",
        monto: parseInt(this.form.value.monto ?? "0"),
        pagado: false,
        idInstitucion: parseInt(this.idInstitucion),
    };

        this.donacionService.guardarDonacion(donacion).subscribe(data => {
          console.log('Datos:', data);
          console.log("Link recibido", data.link);
          window.location.href= data.link;
        })
    }
   
    
    
  } 
  


}

 

