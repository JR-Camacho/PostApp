import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get('http://127.0.0.1:8000/posts');
  }

  setPost(post:Post){
    return this.http.post('http://127.0.0.1:8000/posts', post);
  }

  showPost(id:number){
    return this.http.get(`http://127.0.0.1:8000/posts/${id}`);
  }


}
