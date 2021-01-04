import { Component, OnInit } from '@angular/core';
import { ConsultoriosService } from '../../services/consultorios.service';

@Component({
  selector: 'app-lista-consultorios',
  templateUrl: './lista-consultorios.component.html',
  styleUrls: ['./lista-consultorios.component.css']
})
export class ListaConsultoriosComponent implements OnInit {

  consultorios: any[]=[];
  

  constructor(private _consultoriosService: ConsultoriosService) { }

  ngOnInit(): void {
    this.getConsultorios();
  }

  getConsultorios(){
    this._consultoriosService.getConsultorios().subscribe(data=>{
      this.consultorios = [];
      //console.log(data);
      data.forEach((element:any) => {
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.consultorios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.consultorios);
    });
  }
}
