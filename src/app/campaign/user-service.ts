import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

    public selectedTab: string;

    constructor(private http: Http) { }

    getAdvantageData(): Observable<User[]> {
        let apiUrl = './assets/users.json';
        return this.http.get(apiUrl).pipe(map((response: Response) => {
            return response.json();
        }));
    }
}