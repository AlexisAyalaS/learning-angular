import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatefullComponent } from './statefull/statefull.component';
import { StatelessComponent } from './stateless/stateless.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefullComponent,
    StatelessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
