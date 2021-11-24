import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';

const routes: Routes = [
  {
    path: '', component: UserWelcomeComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
