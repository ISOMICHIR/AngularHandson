import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MensOuterwearComponent } from "app/list/mens-outerwear/mens-outerwear.component";
import { LadiesTshirtsComponent } from "app/list/ladies-tshirts/ladies-tshirts.component";
import { LadiesOuterwearComponent } from "app/list/ladies-outerwear/ladies-outerwear.component";
import { MensTshirtsComponent } from "app/list/mens-tshirts/mens-tshirts.component";
import { ListService } from "app/list.service";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensOuterwearComponent,
    MensTshirtsComponent,
    LadiesOuterwearComponent,
    LadiesTshirtsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
