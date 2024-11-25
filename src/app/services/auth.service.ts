import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https:/';

  constructor(private http: HttpClient) { }

    resetPassword(novaSenha: string, confirmacaoSenha: string): Observable<any> {
      const body = {
        novaSenha: novaSenha,
        confirmacaoSenha: confirmacaoSenha,
      };
        return this.http.post('${this.apiUrl/reset-password', body);
    }
}
