//---------------------angular modules----------------------------------------
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { CommonModule }         from '@angular/common';
import { HttpModule }           from '@angular/http';
//--------------------custom modules----------------------------------
import { AppRoutingModule } from './app-routing.module';
//--------------------components---------------------------------------
import { AppComponent }         from './app.component';
import { MainComponent }        from './components/main/main.component';
//-------------------services------------------------------------------
import { APP_CONFIG, OPAQUE_TOKEN } from './app.config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    {provide: OPAQUE_TOKEN, useValue: APP_CONFIG} // provide for global variables
  ]
})
export class AppModule { }