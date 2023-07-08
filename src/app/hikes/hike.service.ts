import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Hike} from '../types/Hike';

@Injectable({
  providedIn: 'root'
})
export class HikeService {

  constructor (private http: HttpClient) { }

  getAllPosts() {    
    return this.http.get<Hike[]>('https://api-express-server.onrender.com/data/posts');
  }

  getPostsByUserId() {
    return this.http.get<Hike[]>('https://api-express-server.onrender.com/data/posts?where=_ownerId%3D%2264a2f917bd8a0a1944d70d8e%22');
  }

  getById(id: string) {
    return this.http.get<Hike>(`https://api-express-server.onrender.com/data/posts/${id}`);
  }

  search(searchValue: string) {
    return this.http.get<Hike[]>(`https://api-express-server.onrender.com/search?search=${searchValue}`);
  }
}
