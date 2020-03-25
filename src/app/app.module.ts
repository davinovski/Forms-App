import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StepOneComponent } from './step-one/step-one.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StepTwoComponent } from './step-two/step-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepOneComponent,
    StepTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
