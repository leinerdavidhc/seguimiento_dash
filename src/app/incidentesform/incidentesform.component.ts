import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidentesform',
  standalone: true,
  imports: [],
  templateUrl: './incidentesform.component.html',
  styleUrl: './incidentesform.component.css'
})
export class IncidentesformComponent implements OnInit {
  dateTime: string = '';
  ngOnInit(): void {
      this.addDateTime()
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
