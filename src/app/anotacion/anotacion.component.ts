import { Component, OnInit } from '@angular/core';
import { AnotacionApiService } from '../anotacion-api.service';
import { formatDate } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-anotacion',
  standalone: true,
  imports: [TableModule,ButtonModule],
  templateUrl: './anotacion.component.html',
  styleUrl:'./anotacion.component.css',
})
export class AnotacionComponent implements OnInit {
  public datosAnotacion: any;

  constructor(private anotaciopnApi: AnotacionApiService) { }

  ngOnInit(): void {
    this.ObtenerAnotacion();
  }

  ObtenerAnotacion() {
    this.anotaciopnApi.obtenerDatos().subscribe(
      (response) => {
        this.datosAnotacion = response;
        this.datosAnotacion.forEach((anotacion: any) => {
          // Formatear la fecha en cada objeto de anotación
          anotacion.tiempo_paso = this.formatearFecha(anotacion.tiempo_paso);
        });
        console.log(this.datosAnotacion);
      },
      (error) => {
        console.error('Error al obtener datos Anotacion:', error);
      }
    );
  }

  // Método para formatear la fecha en el formato deseado
  formatearFecha(fecha: string): string {
    // Formatear la fecha utilizando formatDate
    return formatDate(fecha, 'dd/MM/yyyy HH:mm:ss', 'en-US');
  }
}

