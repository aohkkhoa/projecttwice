import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateListComponent } from './create-list/create-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'haha', component:EmployeeListComponent},
  {path: 'hihi', component:CreateListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
