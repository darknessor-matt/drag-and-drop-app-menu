import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentFieldComponent } from './components/parent-field/parent-field.component';

import { DragulaModule } from 'ng2-dragula';
import { AppItemHolderComponent } from './components/app-item-holder/app-item-holder.component';
import { AppItemSelectedComponent } from './components/app-item-selected/app-item-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFieldComponent,
    AppItemHolderComponent,
    AppItemSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
