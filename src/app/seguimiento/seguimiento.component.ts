import { Component, OnInit } from '@angular/core';
import { VehiculoApiService } from '../vehiculo-api.service';
import { TableModule } from 'primeng/table';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-seguimiento',
  standalone: true,
  imports: [TableModule],
  templateUrl: './seguimiento.component.html',
  styleUrl: './seguimiento.component.css',
})
export class SeguimientoComponent implements OnInit {
  public datosVehiculos: any;
  public CantidadTotal: number = 0;

  constructor(private vehiculoApi: VehiculoApiService) {}

  ngOnInit(): void {
    this.ObtenerVehiculo();
  }

  ObtenerVehiculo() {
    this.vehiculoApi.obtenerDatos().subscribe(
      (response) => {
        this.datosVehiculos = response;
        this.datosVehiculos.forEach((vehiculo: any) => {
          this.CantidadTotal += vehiculo.cantidad;

          vehiculo.tiempo_inicio = this.formatearFecha(vehiculo.tiempo_inicio);
          vehiculo.tiempo_fin = this.formatearFecha(vehiculo.tiempo_fin);
        });
      },
      (error) => {
        console.error('Error al obtener datos vehiculos:', error);
      }
    );
  }

  // Método para formatear la fecha en el formato deseado
  formatearFecha(fecha: string): string {
    // Formatear la fecha utilizando formatDate
    return formatDate(fecha, 'dd/MM/yyyy HH:mm:ss', 'en-US');
  }
}
