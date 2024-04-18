import { Component, OnInit } from '@angular/core';
interface TipoI {
  tipo: string;
}


@Component({
  selector: 'app-anotacionesform',
  standalone: true,
  imports: [],
  templateUrl: './anotacionesform.component.html',
  styleUrl: './anotacionesform.component.css'
})
export class AnotacionesformComponent implements OnInit{
  Tipos: TipoI[] | undefined;
  dateTime: string = '';
  

  ngOnInit(): void {
    this.Tipos = [
      { tipo: 'automovil' },
      { tipo: 'camión' },
      { tipo: 'camioneta' },
      { tipo: 'moto' },
      { tipo: 'otros' },
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
