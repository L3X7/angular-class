import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostService {
    constructor(private http:HttpClient) { 

    }

    public GetPost (){
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
            map(
                data => {
                    return data;
                }
            )
        );
    }
    
    public GetLink2 (){
        return this.http.get<any>('https://jsonplaceholder.typicode.com/comments').pipe(
            map(
                data => {
                    return data;
                }
            )
        );
    }
}