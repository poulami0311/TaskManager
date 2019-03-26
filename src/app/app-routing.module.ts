import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
const routes: Routes = [
  {path : 'addTask' , component : AddTaskComponent},
  {path : 'viewTask', component : ViewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
