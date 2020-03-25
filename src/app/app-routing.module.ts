import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { ActivateStepTwoGuard } from './guards/activate-step-two.guard'


const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path: 'step1', component: StepOneComponent},
   {path: 'step2', component: StepTwoComponent, canActivate: [ActivateStepTwoGuard]},
   {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
