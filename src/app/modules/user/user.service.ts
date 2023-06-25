import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { JWTResponse, LoginUser, RegisterUser } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:8081/api/';

  private readonly  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public registerUser(dto: RegisterUser) {
    return this.http.post<{}>(this.apiUrl+'users/register', JSON.stringify(dto), this.httpOptions);
  };

  public loginUser(dto: LoginUser) {
    return this.http.post<JWTResponse>(this.apiUrl+'auth', JSON.stringify(dto), this.httpOptions);
  };

  public getUsername():string{
    const jwt:any=localStorage.getItem('token');
    const decoded:any = jwtDecode(jwt);
    return decoded['sub']
  }
}
