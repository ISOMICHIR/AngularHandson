import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { MensOuterwearComponent } from './mens-outerwear/mens-outerwear.component';
import { LadiesOuterwearComponent } from './ladies-outerwear/ladies-outerwear.component';
import { MensTshirtsComponent } from './mens-tshirts/mens-tshirts.component';
import { LadiesTshirtsComponent } from './ladies-tshirts/ladies-tshirts.component';
import { ListComponent } from './list.component';
import { ListService } from "app/list.service";

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [MensOuterwearComponent, LadiesOuterwearComponent, MensTshirtsComponent, LadiesTshirtsComponent, ListComponent],
  providers: [
    ListService
  ]
})
export class ListModule { }
