import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class LoginService {
  url = 'localhost:3000';

  constructor(private http: HttpClient) { }

  login(value: any) {
    this.url = 'localhost:3000/login'
    return this.http.post(this.url, { username: value.username, password: value.password });
  }
}
