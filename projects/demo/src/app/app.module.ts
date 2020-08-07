import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavigationV2Module } from './../../../navigation-player-v2/src/lib/navigation-v2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigationV2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
