import { Injectable  } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from "@angular/forms";
import { interval, map, merge, mergeAll, mergeMap, Subscribable, Subscription, take, tap } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class AuthService{

    constructor(private http: HttpClient){

    }

    login(email:string, password:string){
       return this.http.post('https://dummy.restapiexample.com/api/v1/create', {
        data : {
            name : email,
            age : password
        }
       });
    }
}

