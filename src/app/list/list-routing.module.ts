import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { MensOuterwearComponent } from './mens-outerwear/mens-outerwear.component';
import { LadiesOuterwearComponent } from './ladies-outerwear/ladies-outerwear.component';
import { MensTshirtsComponent } from './mens-tshirts/mens-tshirts.component';
import { LadiesTshirtsComponent } from './ladies-tshirts/ladies-tshirts.component';

const routes: Routes = [ {
    path: '',
    component: ListComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'mensout', component: MensOuterwearComponent },
      { path: 'menst', component: MensTshirtsComponent },
      { path: 'ladiesout', component: LadiesOuterwearComponent },
      { path: 'ladiest', component: LadiesTshirtsComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
