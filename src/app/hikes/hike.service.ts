import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hike } from '../types/Hike';

@Injectable({
    providedIn: 'root'
})
export class HikeService {

    constructor(private http: HttpClient) { }

    getAllPosts() {
        return this.http.get<Hike[]>('https://api-express-server.onrender.com/data/posts');
    }

    getPostsByUserId(userId: string) {
        return this.http.get<Hike[]>(`https://api-express-server.onrender.com/data/posts?where=_ownerId%3D%22${userId}%22`);
    }

    getById(id: string) {
        return this.http.get<Hike>(`https://api-express-server.onrender.com/data/posts/${id}`);
    }

    createPost(postData: {        
        name: string;
        mountain: string;
        country: string;
        duration: string;
        description: string;
        latitude: string;
        longitude: string;
        photos: string[];        
    }) {
        return this.http.post('https://api-express-server.onrender.com/data/posts', postData);
    }

    updatePost(postId: string, updatedHike: {
        name: string;
        mountain: string;
        country: string;
        duration: string;
        description: string;
        latitude: string;
        longitude: string;  
    }) {
        return this.http.put(`https://api-express-server.onrender.com/data/posts/${postId}`, updatedHike);
    }

    delete(postId: string) {
        return this.http.delete(`https://api-express-server.onrender.com/data/posts/${postId}`);
    }

    like(postId: string) {
        return this.http.post(`https://api-express-server.onrender.com/data/posts/${postId}/likes`, {});
    }

    comment(postId: string, newComment: string) {
        return this.http.post(`https://api-express-server.onrender.com/data/posts/${postId}/comments`, {
            content: newComment
        });
    }

    search(searchValue: string) {
        return this.http.get<Hike[]>(`https://api-express-server.onrender.com/search?search=${searchValue}`);
    }
}