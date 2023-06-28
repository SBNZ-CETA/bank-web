import { Component } from '@angular/core';
import { NewBankAccountDto } from '../dto/NewBankAccountDto';
import { BankAccountService } from '../service/bank-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private accountService:BankAccountService) { }
  public accountDto: NewBankAccountDto = {} as NewBankAccountDto;

  createAccount() {
    this.accountService.createAccount(this.accountDto).subscribe(
      _ => alert('Success'),
      error => alert(error)
    )
  }

}
