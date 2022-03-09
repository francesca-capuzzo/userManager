import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddressCardComponent } from './components/address-card/address-card.component';

import { HttpClientModule } from '@angular/common/http';
import { SingleUserPageComponent } from './components/single-user-page/single-user-page.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    AddressCardComponent,
    SingleUserPageComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
