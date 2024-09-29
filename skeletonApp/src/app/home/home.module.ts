import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de incluir ReactiveFormsModule
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';
import { MisdatosComponent } from '../misdatos/misdatos.component';
import { NotfoundComponent } from '../notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    NotfoundComponent
  ],
  declarations: [
    HomePage,
    ExperienciaComponent,
    CertificacionesComponent,
    MisdatosComponent,
    NotfoundComponent,
  ]
})
export class HomePageModule {}