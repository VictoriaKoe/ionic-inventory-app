import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsPolicyPageRoutingModule } from './terms-policy-routing.module';

import { TermsPolicyPage } from './terms-policy.page';
import { NavBar2Component } from 'src/app/components/nav-bar2/nav-bar2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsPolicyPageRoutingModule,
    NavBar2Component
  ],
  declarations: [TermsPolicyPage]
})
export class TermsPolicyPageModule {}
