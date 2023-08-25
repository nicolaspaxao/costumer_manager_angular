import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumersPageComponent } from './costumers-page/costumers-page.component';

const routes: Routes = [
  { path: '', component: CostumersPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostumersRoutingModule { }
