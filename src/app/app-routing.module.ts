import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MensOuterwearComponent } from "app/list/mens-outerwear/mens-outerwear.component";
import { MensTshirtsComponent } from "app/list/mens-tshirts/mens-tshirts.component";
import { LadiesOuterwearComponent } from "app/list/ladies-outerwear/ladies-outerwear.component";
import { LadiesTshirtsComponent } from "app/list/ladies-tshirts/ladies-tshirts.component";

const routes: Routes = [
  {
    path: '',
    children: [],
  },
  { path: 'home', component: HomeComponent },
  { path: 'list', loadChildren: './list/list.module#ListModule' },
  { path: 'mensout', component: MensOuterwearComponent },
  { path: 'menst', component: MensTshirtsComponent },
  { path: 'ladiesout', component: LadiesOuterwearComponent },
  { path: 'ladiest', component: LadiesTshirtsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
