import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from './photo';


const API = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private http: HttpClient) {

    }


    listFromUserName(userName: string) {

        return this.http.get<Photo[]>(`${API}${userName}/photos`);
    }

    listFromUsernamePaginated(username:string, page:number){

        const calopsita = new HttpParams().append('page', page.toString());

        // to set param in url dor get method 
       // return this.http.get<Photo[]>(`${API}${username}/photos`, {params}) // if the key has the same anme of variable we can get out the key like this example 
        return this.http.get<Photo[]>(`${API}${username}/photos`, {params: calopsita})
    }
}