import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectDropDownModule } from '../../../../projects/ngx-select-dropdown/src/lib/ngx-select-dropdown.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
