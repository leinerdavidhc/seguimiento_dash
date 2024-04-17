import { Component, OnInit } from '@angular/core';
import { IncidentesService } from '../incidentes.service';
import { formatDate } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-incidentes',
  standalone: true,
  imports: [TableModule],
  templateUrl: './incidentes.component.html',
  styleUrl: './incidentes.component.css'
})
export class IncidentesComponent implements OnInit{
  public datosIncidentes: any;

  constructor(private IncidentesApi:IncidentesService){}

  ngOnInit(): void {
    this.ObtenerIncidentes();
  }

  ObtenerIncidentes() {
    this.IncidentesApi.obtenerDatos().subscribe(
      (response) => {
        this.datosIncidentes = response;
        this.datosIncidentes.forEach((incidente: any) => {
          // Formatear la fecha en cada objeto de anotación
          incidente.tiempo_inicio = this.formatearFecha(incidente.tiempo_inicio);
          incidente.tiempo_fin = this.formatearFecha(incidente.tiempo_fin);
        });
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
