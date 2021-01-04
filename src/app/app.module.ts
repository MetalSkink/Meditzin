import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos importados
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaConsultoriosComponent } from './pages/lista-consultorios/lista-consultorios.component';
import { MisConsultasComponent } from './pages/mis-consultas/mis-consultas.component';
import { ConsultorioComponent } from './pages/consultorio/consultorio.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ListaConsultoriosComponent,
    MisConsultasComponent,
    ConsultorioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
