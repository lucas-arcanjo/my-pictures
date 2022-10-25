import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Photos } from "../model/photos";
import { PhotosService } from "../service/photos.service";

@Injectable({ providedIn: 'root' })

export class PhotoListResolver implements Resolve<Observable<Photos[]>> {

    constructor(private photosService: PhotosService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photos[]> {
        const userName = route.params.userName;
        return this.photosService.listFromUser(userName);
    }

}