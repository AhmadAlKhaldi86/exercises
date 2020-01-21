import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';
import { FComponent } from './f/f.component';
import { GComponent } from './g/g.component';
import { JComponent } from './j/j.component';
import { KComponent } from './k/k.component';
import { LComponent } from './l/l.component';
// I removed below since we have them exported as routingComponents in app-routing.module
// import { HComponent } from './h/h.component';
// import { IComponent } from './i/i.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    EComponent,
    FComponent,
    GComponent,
    routingComponents,
    JComponent,
    KComponent,
    LComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
