
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule ,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
