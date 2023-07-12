import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HikeService } from "../hike.service";
import { Hike } from "src/app/types/Hike";


@Injectable({
    providedIn: 'root'
})
export class HikeDetailsResolver implements Resolve<Hike> {
    constructor(private hikeService: HikeService) {}

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Hike | Observable<Hike> | Promise<Hike> {        
        return this.hikeService.getById(route.params['id']);
    }
}