import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ConsultaModel } from '../models/consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultoriosService {

  constructor(private firestore: AngularFirestore) { }

  getConsultorios(): Observable<any>{
    return this.firestore.collection('consultorios').snapshotChanges();
  }

  getConsultorio(id: string): Observable<any>{
    return this.firestore.collection('consultorios').doc(id).snapshotChanges();
  }

  agregarConsulta(consulta:ConsultaModel):Promise<any>{
    return this.firestore.collection('consultas').add(consulta);
  }

  getConsultas(): Observable<any>{
    return this.firestore.collection('consultas').snapshotChanges();
  }

}
