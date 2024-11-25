import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full' // Garante que o redirecionamento ocorre somente na rota inicial
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados.module').then(m => m.DadosPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then(m => m.HistoricoPageModule)
  },
  {
    path: 'recuperacao-senha',
    loadChildren: () => import('./recuperacao-senha/recuperacao-senha.module').then( m => m.RecuperacaoSenhaPageModule)
  },
  {
    path: 'cadastro-aluno',
    loadChildren: () => import('./cadastro-aluno/cadastro-aluno.module').then( m => m.CadastroAlunoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
