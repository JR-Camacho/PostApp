import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute, private postsS:PostsService) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.getPost();
  }

  post:Post[];
  id:number;

  getPost(){
    this.postsS.showPost(this.id).subscribe(data => {
      this.post = Object.values(data);
      console.log(this.post);
    })
  }



}
