import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,SidebarModule,ButtonModule,PanelMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Segumiento dashboard';
  items: MenuItem[] = [];
  sidebarVisible: boolean = false;
  
  ngOnInit(): void {
    this.items = [
      {
        label: 'Registros',
        icon: PrimeIcons.FILE_EDIT,
        items: [
          {
            label: 'Seguimiento',
            icon: PrimeIcons.EYE,
            routerLink: '/seguimiento',
          },
          {
            separator: true,
          },
          {
            label: 'Anotacion',
            icon: PrimeIcons.FILE,
            routerLink: '/anotacion',
          },
        ],
      },
      {
        label: 'Estadisticas',
        icon: PrimeIcons.CHART_BAR,
        routerLink: '/',
      },
    ];
  }
}
