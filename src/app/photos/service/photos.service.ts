import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photos } from "../model/photos";

const api = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })

export class PhotosService {
    
    constructor(private http: HttpClient) { }

    listFromUser(userName?: string) {
        return this.http.get<Photos[]>(`${api}/flavio/photos`);
    }
}