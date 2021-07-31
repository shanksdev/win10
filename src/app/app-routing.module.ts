import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './components/desktop/desktop.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'desktop',
    pathMatch:'full'
  },
  {
    path:'desktop',
    component:DesktopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
