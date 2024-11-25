import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacaoSenhaPage } from './recuperacao-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacaoSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacaoSenhaPageRoutingModule {}
