import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeModule } from './home/home.module';
import { ClientesModule } from './clientes/clientes.module'
import { ClientesService } from './services/clientes.service';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ServicoPrestadoService } from './services/servico-prestado.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
