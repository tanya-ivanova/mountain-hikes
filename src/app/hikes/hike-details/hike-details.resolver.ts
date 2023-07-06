import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PostService } from "../post.service";
import { Post } from "src/app/types/Post";


@Injectable({
    providedIn: 'root'
})
export class HikeDetailsResolver implements Resolve<Post> {
    constructor(private postService: PostService) {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Post | Observable<Post> | Promise<Post> {
        console.log(this.postService.getById(route.params['id']));
        return this.postService.getById(route.params['id']);
    }
}