import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TododashboardComponent } from './shared/components/tododashboard/tododashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TododashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
