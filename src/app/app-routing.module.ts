import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadesFederativasComponent } from './component/unidades-federativas/unidades-federativas.component';

const routes: Routes = [
   { path: 'unidades-federativas', component: UnidadesFederativasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }