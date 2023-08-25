import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostumersRoutingModule } from './costumers-routing.module';
import { CostumersPageComponent } from './costumers-page/costumers-page.component';


@NgModule({
  declarations: [
    CostumersPageComponent,
  ],
  imports: [
    CommonModule,
    CostumersRoutingModule
  ]
})
export class CostumersModule { }
