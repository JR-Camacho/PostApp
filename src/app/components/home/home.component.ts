import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postsS:PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  posts:Post[];

  getPosts(){
    this.postsS.getPost().subscribe(data => {
      this.posts = Object.values(data);
      console.log(this.posts);
    })
  }

  
}
