import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaConsultoriosComponent } from './pages/lista-consultorios/lista-consultorios.component';
import { MisConsultasComponent } from './pages/mis-consultas/mis-consultas.component';
import { ConsultorioComponent } from './pages/consultorio/consultorio.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ListaConsultoriosComponent},
  { path: 'mis-consultas', component: MisConsultasComponent},
  { path: 'consultorio/:id', component: ConsultorioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
