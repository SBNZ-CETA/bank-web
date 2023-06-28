import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDto } from './model';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:8081/api/';

  private readonly  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public submitLoan(dto: LoanDto) {
    return this.http.post<unknown>(this.apiUrl+'loans', JSON.stringify(dto), this.httpOptions);
  };
}
