import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingleUserPageComponent } from './components/single-user-page/single-user-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/:id', component: SingleUserPageComponent },
  { path: '**', component: PageNotFoundComponent }
  // { path: '**', redirectTo: '/users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
