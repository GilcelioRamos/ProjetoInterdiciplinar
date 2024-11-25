import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recuperacao-senha',
  templateUrl: './recuperacao-senha.page.html',
  styleUrls: ['./recuperacao-senha.page.scss'],
})
export class RecuperacaoSenhaPage  {
  novaSenha: string = '';
  confirmacaoSenha: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    if(this.novaSenha !== this.confirmacaoSenha){
      console.log("As senhas não coincidem!");
      return;
    } 
      this.authService.resetPassword(this.novaSenha, this.confirmacaoSenha).subscribe({
      next: (response) => {
        console.log('Senha atualizada com sucesso!', response);
        // Adicione lógica para feedback ao usuário, como redirecionamento ou mensagem.
      },
      error: (error) => {
        console.error('Erro ao atualizar a senha:', error);
        // Adicione lógica para tratar erros, como mensagens de erro ao usuário.
      },
    });
  }
}
