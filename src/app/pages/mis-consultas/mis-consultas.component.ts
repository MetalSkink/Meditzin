import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsultoriosService } from 'src/app/services/consultorios.service';

@Component({
  selector: 'app-mis-consultas',
  templateUrl: './mis-consultas.component.html',
  styleUrls: ['./mis-consultas.component.css']
})
export class MisConsultasComponent implements OnInit {

  consultas: any[]=[];
  vigente: boolean= true;

  fechaActual = new Date();
  fechaConsulta:Date;
  parse1: number;
  parse2: number;

  constructor(private _consultoriosService: ConsultoriosService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getMisConsultas();
  }

  getMisConsultas(){
    this._consultoriosService.getConsultas().subscribe(data=>{
      this.consultas = [];
      data.forEach((element:any) => {
      this.parse1= Date.parse(element.payload.doc.data().fecha);
      //this.parse2= Date.
      this.fechaConsulta = new Date(this.parse1);
      console.log("Fecha consulta: "+this.fechaConsulta);
      console.log("Fecha actual: "+this.fechaActual);



        if(this.fechaActual > this.fechaConsulta){
          this.vigente=false;
          //console.log("entro en la funcion y la cita esta caducada");
        }else{
          this.vigente=true;
        }
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.consultas.push({
          id: element.payload.doc.id,
          vigencia: this.vigente,
          ...element.payload.doc.data()
        });

      });

      console.log(this.consultas);
    });
  }

    eliminarConsulta(id:string){
    this._consultoriosService.eliminarConsulta(id).then(() =>{
      console.log('consulta con el ID: '+id+' eliminado');
      this.toastr.error('Consulta eliminada del sistema', 'La consulta fue eliminada con exito!',{
        positionClass:'toast-bottom-right'
      });

      // this.toastr.error('Consulta eliminada del sistema', 'La consulta fue eliminada con exito!',{
      //    positionClass:'toast-bottom-right'
      // });

    }).catch(error =>{
      console.log(error);

    })

    }
  }
