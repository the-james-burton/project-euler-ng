import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EulerComponent } from './euler/euler.component';
import { NotFoundComponent } from './not-found.component';
import { GridComponent } from './grid/grid.component';


const routes: Routes = [
  { path: '', component: EulerComponent, pathMatch: 'full' },
  { path: 'grid', component: GridComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
