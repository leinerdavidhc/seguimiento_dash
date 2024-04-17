import { Routes } from '@angular/router';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AnotacionComponent } from './anotacion/anotacion.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IncidentesComponent } from './incidentes/incidentes.component';



export const routes: Routes = [
  {path: 'seguimiento', component:SeguimientoComponent},
  {path:'anotacion', component:AnotacionComponent},
  {path:'incidentes', component:IncidentesComponent},
  {path:'',component:EstadisticaComponent}
];
