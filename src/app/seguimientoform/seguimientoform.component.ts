import { Component, OnInit } from '@angular/core';
interface TipoI {
  tipo: string;
}
interface DireccionI {
  direccion: string;
}

@Component({
  selector: 'app-seguimientoform',
  standalone: true,
  imports: [],
  templateUrl: './seguimientoform.component.html',
  styleUrl: './seguimientoform.component.css'
})
export class SeguimientoformComponent implements OnInit{
  Tipos: TipoI[] | undefined;
  Direccion: DireccionI[] | undefined;
  dateTime: string = '';
  

  ngOnInit(): void {
    this.Tipos = [
      { tipo: 'automovil' },
      { tipo: 'camión' },
      { tipo: 'camioneta' },
      { tipo: 'moto' },
      { tipo: 'otros' },
    ];

     this.Direccion = [
      { direccion: 'arriba ⭡' },
      { direccion: 'arriba-izquierda ↰' },
      { direccion: 'arriba-derecha ↱' },
      { direccion: 'izquierda ⭠' },
      { direccion: 'izquierda-arriba ⬏' },
      { direccion: 'derecha ⭢' },
      { direccion: 'derecha-arriba ⬑' },
      { direccion: 'abajo ⭣' },
    ];
    this.addDateTime();
  }

  addDateTime() {
    const now = new Date(); // Obtener la fecha y hora actuales
    const hours = this.formatNumber(now.getHours()); // Obtener las horas
    const minutes = this.formatNumber(now.getMinutes()); // Obtener los minutos
    const seconds = this.formatNumber(now.getSeconds()); // Obtener los segundos

    // Formatear la fecha y hora en el formato deseado (HH:MM:SS)
    this.dateTime = `${hours}:${minutes}:${seconds}`;
  }

  formatNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
