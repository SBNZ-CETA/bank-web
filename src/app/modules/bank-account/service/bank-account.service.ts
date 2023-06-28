import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewBankAccountDto } from '../dto/NewBankAccountDto';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:8081/api/accounts';

  private readonly  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public createAccount(accountDto: NewBankAccountDto) {
    return this.http.post<NewBankAccountDto>(this.apiUrl, accountDto, this.httpOptions);
  }

}
