import { Routes } from '@angular/router';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { AnotacionComponent } from './anotacion/anotacion.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';



export const routes: Routes = [
  {path: 'seguimiento', component:SeguimientoComponent},
  {path:'anotacion', component:AnotacionComponent},
  {path:'',component:EstadisticaComponent}
];
