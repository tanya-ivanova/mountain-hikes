import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './types/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor (private http: HttpClient) { }

  getAllPosts() {    
    return this.http.get<Post[]>('https://api-express-server.onrender.com/data/posts');
  }

  getPostsByUserId() {
    return this.http.get<Post[]>('https://api-express-server.onrender.com/data/posts?where=_ownerId%3D%2264a2f917bd8a0a1944d70d8e%22');
  }
}
