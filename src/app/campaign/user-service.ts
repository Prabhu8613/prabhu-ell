import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Email } from '../../Email';

@Injectable()
export class UserService {

    public selectedTab: string;
    emailData: Email;

    constructor(private http: Http) { }

    getAdvantageData(): Observable<User[]> {
        let apiUrl = './assets/users.json';
        return this.http.get(apiUrl).pipe(map((response: Response) => {
            return response.json();
        }));
    }

    sendEmail(emailSubject, emailBody, emailAddress) {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        this.emailData = new Email(emailBody, emailSubject, emailAddress);
        return this.http.post('http://ec2-52-70-15-104.compute-1.amazonaws.com:2001/campaign/sendEmailFor', JSON.stringify(this.emailData), options).subscribe(success => success.status);
    }
}
