import { Component, OnInit } from '@angular/core';
import { TecnicosService } from '../tecnicos.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  tecnicos: any[] = [];

  constructor(private tecnicosService: TecnicosService) { }

  ngOnInit(): void {
    this.getTecnicos();
  }

  getTecnicos(): void {
    this.tecnicosService.getTecnicos().subscribe(
      (data) => {
        this.tecnicos = data;
      },
      (error) => {
        console.error('Error al obtener los técnicos', error);
      }
    );
  }
}
