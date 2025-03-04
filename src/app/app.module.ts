import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { SolicitudesContactosComponent } from './componentes/solicitudes-contactos/solicitudes-contactos/solicitudes-contactos.component';
import { ServiciosComponent } from './servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent,
    FooterComponent,
    SolicitudesContactosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  // Agrega HttpClientModule en imports
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    // ServiciosService ya está proporcionado en el servicio, no es necesario agregarlo aquí.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
