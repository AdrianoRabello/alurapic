import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Photo } from "../photo/photo";
import { PhotoService } from './../photo/photo.service';



@Injectable({
    providedIn: 'root'
})

// Resolver need to implements Resolve
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {


    constructor(private service:PhotoService,private router:ActivatedRoute){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {

        
        const userName = route.params.userName;

        return this.service.listFromUsernamePaginated(userName,1);
    }

}