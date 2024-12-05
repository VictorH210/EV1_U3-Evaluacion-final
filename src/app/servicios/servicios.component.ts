import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];  

  constructor(private serviciosSrv: ServiciosService) { }

  ngOnInit(): void {
    this.serviciosSrv.obtenerServicios().subscribe(
      (response: any) => {
        this.servicios = response.servicios;  
        console.log(this.servicios); 
      },
      (error) => {
        console.log(error);  
      }
    );
  }
}
