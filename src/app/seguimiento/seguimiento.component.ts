import { Component, OnInit } from '@angular/core';
import { VehiculoApiService } from '../vehiculo-api.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

interface TipoI {
  tipo: string;
}
interface DireccionI {
  direccion: string;
}

@Component({
  selector: 'app-seguimiento',
  standalone: true,
  imports: [TableModule, DialogModule, DropdownModule,InputNumberModule],
  templateUrl: './seguimiento.component.html',
  styleUrl: './seguimiento.component.css',
})
export class SeguimientoComponent implements OnInit {
  public datosVehiculos: any;
  public CantidadTotal: number = 0;
  visible: boolean = true;
  Tipos: TipoI[] | undefined;
  Direccion: DireccionI[] | undefined;
  formGroup: FormGroup | undefined;

  constructor(private vehiculoApi: VehiculoApiService) {}

  ngOnInit(): void {
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
        });
        console.log(this.datosVehiculos);
      },
      (error) => {
        console.error('Error al obtener datos vehiculos:', error);
      }
    );
  }

  showDialog() {
    this.visible = true;
  }
}
