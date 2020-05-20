import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EditComponent } from './components/edit/edit.component';
import { SalesComponent } from './components/sales/sales.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent}, 
  {path: 'edit', component: EditComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
