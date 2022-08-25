import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowPostsComponent } from './components/show-posts/show-posts.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'show-post/:id', component:ShowPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
