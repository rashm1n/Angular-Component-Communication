import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AppleComponent } from './apple/apple.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    AppleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
