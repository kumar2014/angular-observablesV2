import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Comp1Component, Comp2Component],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
