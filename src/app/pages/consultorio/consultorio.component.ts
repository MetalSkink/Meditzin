import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaModel } from 'src/app/models/consulta.model';
import { ConsultoriosService } from '../../services/consultorios.service';

@Component({
  selector: 'app-consultorio',
  templateUrl: './consultorio.component.html',
  styleUrls: ['./consultorio.component.css']
})
export class ConsultorioComponent implements OnInit {

  consultorio:any;
  id:string | null;
  forma: FormGroup;

  constructor(private _consultoriosService: ConsultoriosService,
              private fb:FormBuilder,
              private aRoute: ActivatedRoute,
              private router: Router
) {

                this.crearFormulario();
    }

  ngOnInit(): void {

    this.id= this.aRoute.snapshot.paramMap.get('id');
    this._consultoriosService.getConsultorio(this.id).subscribe(data=>{
      console.log(data);
      const consultorio:any={
        nombreC: data.payload.data()['nombreC'],
        nombreD: data.payload.data()['nombreD'],
        foto: data.payload.data()['foto'],
        ubicacion: data.payload.data()['ubicacion'],
        descripcion: data.payload.data()['descripcion'],
        grado: data.payload.data()['grado'],
        contacto: data.payload.data()['contacto']
      }
      console.log(consultorio);

      this.consultorio=consultorio;
      console.log(this.consultorio);

    });


  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:   ['', [Validators.required, Validators.minLength(5)]],
      numero: ['', [Validators.required, Validators.minLength(5)]],
      razon:   ['', [Validators.required, Validators.minLength(5)]],
      fecha:    ['', Validators.required]
    });
}

  guardar(){
    const consulta:ConsultaModel={
      nombre: this.forma.value.nombre,
      numero:this.forma.value.numero,
      razon:this.forma.value.razon,
      fecha:this.forma.value.fecha,
    }
    console.log('estas mandando a guardar los datos');
    this._consultoriosService.agregarConsulta(consulta);
    console.log("ya mandaste los datos");

    // this.router.navigate(['View']);
    this.router.navigate(['/mis-consultas']);

  }

}
