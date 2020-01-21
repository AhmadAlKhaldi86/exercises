import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import the components
import { HComponent } from './h/h.component';
import { IComponent } from './i/i.component';
import { JComponent } from './j/j.component';
import { LComponent } from './l/l.component'; // where is the details for component dep: id parameter 

// Here is where you define all the possible routes for your application.
// Routes are just objects {path(url) + Component}
// Now this means if you navigate to localhost:4200/departments it will take you to HComp.
const routes: Routes = [
  {path: "", redirectTo: '/departments', pathMatch: "full"},
  {path: "departments", component: HComponent},
  {path: "departments/:id", component: LComponent},
  {path: "employees", component: IComponent},
  {path: "**", component: JComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HComponent,IComponent,JComponent,LComponent];