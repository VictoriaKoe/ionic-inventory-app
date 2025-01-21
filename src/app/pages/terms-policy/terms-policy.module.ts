import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsPolicyPageRoutingModule } from './terms-policy-routing.module';

import { TermsPolicyPage } from './terms-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsPolicyPageRoutingModule
  ],
  declarations: [TermsPolicyPage]
})
export class TermsPolicyPageModule {}
