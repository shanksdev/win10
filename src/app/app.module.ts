import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap, Action } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import * as appReducers from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    StoreModule.forRoot({appTheme: appReducers.themeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
