import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';

import { TodoComponent } from './todo/todo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:'todo', component:[TodoComponent]}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    AppRoutingRoutingModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
