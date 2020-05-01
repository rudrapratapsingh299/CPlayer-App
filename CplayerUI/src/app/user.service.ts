import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouterService } from './router.service';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private route: RouterService) { }

  signup(user: User) {
    return this.httpClient.post<User>("http://localhost:8001/api/user", user)
  }

  public getdetails(username: string, token:string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8001/api/user/pro/token?username=${username}`, {
      headers: new HttpHeaders().set("Authorization",`Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

}