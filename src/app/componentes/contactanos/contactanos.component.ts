import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicosService } from '../../tecnicos.service'; 


@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  tecnicos: any[] = [];  // Nueva variable para almacenar los técnicos
  
  constructor(private formBuild: FormBuilder, 
              private solicitudFormularioSrv: SolicitudFormularioService,
              private tecnicosService: TecnicosService) {  // Inyecta el servicio de técnicos
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }

  ngOnInit() {
    // Obtener los técnicos cuando el componente se inicializa
    this.tecnicosService.getTecnicos().subscribe(
      (response: any) => {
        this.tecnicos = response;  // Asigna los técnicos a la variable
        console.log(this.tecnicos);  // Ver los datos de los técnicos
      },
      (error) => {
        console.log(error);  // Manejo de errores
      }
    );
  }

  enviarDatos() {
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response: any) => {
        this.datos_formulario = response.solicitud_formulario;
        console.log(this.datos_formulario);
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
}

