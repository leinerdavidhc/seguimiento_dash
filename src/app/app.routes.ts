import { Routes } from '@angular/router';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AnotacionComponent } from './anotacion/anotacion.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IncidentesComponent } from './incidentes/incidentes.component';
import { SeguimientoformComponent } from './seguimientoform/seguimientoform.component';
import { IncidentesformComponent } from './incidentesform/incidentesform.component';
import { AnotacionesformComponent } from './anotacionesform/anotacionesform.component';



export const routes: Routes = [
  {path: 'seguimiento', component:SeguimientoComponent},
  {path:'anotacion', component:AnotacionComponent},
  {path:'incidentes', component:IncidentesComponent},
  {path:'add/seguimientos', component:SeguimientoformComponent},
  {path:'add/anotaciones',component:AnotacionesformComponent},
  {path:'add/incidentes', component:IncidentesformComponent},
  {path:'',component:EstadisticaComponent}
];
