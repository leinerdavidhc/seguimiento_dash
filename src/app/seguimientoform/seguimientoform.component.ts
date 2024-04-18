import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
interface TipoI {
  tipo: string;
}
interface DireccionI {
  direccion: string;
}

@Component({
  selector: 'app-seguimientoform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './seguimientoform.component.html',
  styleUrl: './seguimientoform.component.css'
})
export class SeguimientoformComponent implements OnInit{
  Tipos: TipoI[] | undefined;
  Direccion: DireccionI[] | undefined;
  dateTime1: string = '';
  dateTime2: string = '';
  form:FormGroup;

  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      tipo:['', Validators.required],
      direccion:['',Validators.required],
      cantidad:[1,Validators.required],
      date_inicio:['',Validators.required],
      time_inicio:['',Validators.required],
      date_fin:['',Validators.required],
      time_fin:['',Validators.required]

    })
  }
  

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
    this.addDateTime(1);
    this.addDateTime(2);

    this.form.get("time_inicio")?.setValue(this.dateTime1)
    this.form.get("time_fin")?.setValue(this.dateTime2)
  }

  addDateTime(value: number) {
    const now = new Date(); // Obtener la fecha y hora actuales
    const hours = this.formatNumber(now.getHours()); // Obtener las horas
    const minutes = this.formatNumber(now.getMinutes()); // Obtener los minutos
    const seconds = this.formatNumber(now.getSeconds()); // Obtener los segundos

    // Formatear la fecha y hora en el formato deseado (HH:MM:SS)

    if (value==1) {
      this.dateTime1 = `${hours}:${minutes}:${seconds}`;
    }else{
      this.dateTime2 = `${hours}:${minutes}:${seconds}`;
    }
    
  }

  formatNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  getDataForm(){
    console.log(this.form.value);
    this.form.reset();
    this.form.get("time_inicio")?.setValue(this.dateTime1)
    this.form.get("time_fin")?.setValue(this.dateTime2)
  }
}
