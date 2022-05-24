import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header/header.component';
import { LeftnavComponent } from '../leftnav/leftnav/leftnav.component';

const routes: Routes = [
  {path: 'header', component:HeaderComponent},
  {path: 'leftnav', component:LeftnavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
