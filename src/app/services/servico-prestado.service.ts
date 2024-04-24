import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from '../servico-prestado/ServicoPrestado';
import { environment } from "../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: String = environment.apiURL + "/api/servico-prestado";

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(`${this.apiURL}`, servicoPrestado);
  }
}
