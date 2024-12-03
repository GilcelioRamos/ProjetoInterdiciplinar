import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  login(cpf: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = {
      cpf,
      senha,
    };
    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }

  resetPassword(novaSenha: string, confirmacaoSenha: string) {
    const body = {
      novaSenha,
      confirmacaoSenha,
    };
    return this.http.post(`${this.apiUrl}/login`, body);
  };
}
