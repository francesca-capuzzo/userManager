import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Company } from 'src/app/model/company';
import { Posts } from 'src/app/model/posts';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/services/connection.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.scss']
})
export class SingleUserPageComponent implements OnInit {

  user?: User;
  address?: Address;
  company?: Company;
  posts: Posts[] = [];
  
  constructor(private connServ: ConnectionService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    this.connServ.getSingleUser("5").subscribe(user => this.user = user);
    
  }

  loadPosts(){
    return this.connServ.getPosts("id").subscribe(post => this.posts = post);
  }

  getId(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.connServ.getSingleUser(id)
      .subscribe(user => this.user = user);
  }
}
