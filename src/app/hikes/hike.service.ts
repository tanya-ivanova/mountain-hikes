import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hike } from '../types/Hike';
import { HikeData } from '../types/HikeData';

@Injectable({
    providedIn: 'root'
})
export class HikeService {

    constructor(private http: HttpClient) { }

    getAllPosts(page: number) {
        return this.http.get<HikeData>(`https://api-express-server.onrender.com/data/posts?page=${page}`);
    }

    getPostsByUserId(userId: string, page: number) {
        return this.http.get<HikeData>(`https://api-express-server.onrender.com/data/posts?where=_ownerId%3D%22${userId}%22&page=${page}`);
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

    search(searchValue: string, page: number) {
        return this.http.get<HikeData>(`https://api-express-server.onrender.com/search?search=${searchValue}&page=${page}`);
    }
}
