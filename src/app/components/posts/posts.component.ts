import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/model/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post?: Posts;


  constructor() { }

  ngOnInit(): void {
  }

}
