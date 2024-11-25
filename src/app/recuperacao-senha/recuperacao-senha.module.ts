import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacaoSenhaPageRoutingModule } from './recuperacao-senha-routing.module';

import { RecuperacaoSenhaPage } from './recuperacao-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacaoSenhaPageRoutingModule
  ],
  declarations: [RecuperacaoSenhaPage]
})
export class RecuperacaoSenhaPageModule {}
