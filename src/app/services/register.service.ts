import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newuser } from '../models/newuser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService{

  constructor(private httpClient: HttpClient){}

    url = "http://localhost:3000/register"

    register(novo_usuario: Newuser): Observable<any>{
      return this.httpClient.post(this.url, JSON.stringify(novo_usuario),{
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: "response"
      })

    }

}