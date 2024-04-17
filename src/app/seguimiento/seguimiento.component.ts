import { Component, OnInit } from '@angular/core';
import { VehiculoApiService } from '../vehiculo-api.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup} from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { formatDate } from '@angular/common';

interface TipoI {
  tipo: string;
}
interface DireccionI {
  direccion: string;
}

@Component({
  selector: 'app-seguimiento',
  standalone: true,
  imports: [TableModule, DialogModule, DropdownModule,InputNumberModule,CalendarModule],
  templateUrl: './seguimiento.component.html',
  styleUrl: './seguimiento.component.css',
})
export class SeguimientoComponent implements OnInit {
  public datosVehiculos: any;
  public CantidadTotal: number = 0;
  visible: boolean = true;
  Tipos: TipoI[] | undefined;
  Direccion: DireccionI[] | undefined;
  date: Date = new Date();

  
  

  constructor(private vehiculoApi: VehiculoApiService) {}

  ngOnInit(): void {
    console.log(this.date);
    this.ObtenerVehiculo();
    this.Tipos = [
      { tipo: 'automovil' },
      { tipo: 'camión' },
      { tipo: 'camioneta' },
      { tipo: 'moto' },
      { tipo: 'otros' },
    ];
    this.Direccion = [
      { direccion: 'arriba' },
      { direccion: 'arriba-izquierda' },
      { direccion: 'arriba-derecha' },
      { direccion: 'izquierda' },
      { direccion: 'izquierda-arriba' },
      { direccion: 'derecha' },
      { direccion: 'derecha-arriba' },
      { direccion: 'abajo' },
    ];

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

  showDialog() {
    this.visible = true;
  }
}
