import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './model';

@Injectable({
  providedIn: 'root'
})
export class SusTransactionService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:8081/api/';

  private readonly  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getAll() {
    return this.http.get<Transaction[]>(`${this.apiUrl}transactions/all`, this.httpOptions)
  };

  public notSuspicious(id: number) {
    return this.http.get<Transaction>(`${this.apiUrl}transactions/not-sus/${id}`, this.httpOptions)
  }
}
