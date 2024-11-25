import { Component} from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
})
export class CadastroAlunoPage {
  formData = {
    nome: '',
    telefone: '',
    endereco: '',
    cep: '',
    email: '',
    dataNascimento:'',
    rg: '',
    cpf: '',
    senha: '',
  };

  constructor() { }

  onSubmit() {
    console.log("Dados do formulário:", this.formData);
  }

}
