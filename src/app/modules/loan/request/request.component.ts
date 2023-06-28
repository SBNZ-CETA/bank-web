import { Component } from '@angular/core';
import { LoansService } from '../loans.service';
import { LoanDto } from '../model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  public loanDto: LoanDto = {
    requestedAmount: 0,
    rates: 0,
    workStatus: 0,
    startingWorkDateIfEmployed: '',
    expirationWorkDateIfLimited: '',
  }


  constructor(
    private service: LoansService
  ) {}

  submitLoan() {
    this.service.submitLoan(this.loanDto).subscribe(
      _ => alert('Success'),
      error => alert(error)
    )
  }
}
