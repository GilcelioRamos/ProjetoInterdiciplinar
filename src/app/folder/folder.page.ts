// import { Component, inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-folder',
//   templateUrl: './folder.page.html',
//   styleUrls: ['./folder.page.scss'],
// })
// export class FolderPage {
//   loginForm: FormGroup;
  
//   constructor(private fb: FormBuilder,private apiService: AuthService, private router: Router ) {
//     this.loginForm = this.fb.group({
//       cpf: ['', Validators.required],
//       senha: ['', Validators.required], 
//     });
//   }

//   login(){
//     if (this.loginForm.valid) {
//       const { cpf, senha } = this.loginForm.value;
//       this.apiService.login(cpf, senha).subscribe(
//         (response) => {
//           console.log('Login bem-sucedido:', response);
//           this.router.navigate(['/home']); // Redireciona após o login
//         },
//         (error) => {
//           console.error('Erro no login:', error);
//           alert('Credenciais inválidas!');
//         }
//       );
//     }
//   }
// }
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}