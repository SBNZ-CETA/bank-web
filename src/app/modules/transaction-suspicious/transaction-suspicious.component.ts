import { Component } from '@angular/core';
import { SusTransactionService } from './sus-transaction.service';
import { Transaction } from './model';

@Component({
  selector: 'app-transaction-suspicious',
  templateUrl: './transaction-suspicious.component.html',
  styleUrls: ['./transaction-suspicious.component.css']
})
export class TransactionSuspiciousComponent {

  public transactions: Transaction[] = [];

  constructor(
    private service: SusTransactionService,
  ){}

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.transactions = data
      this.transactions = data.filter(function(e) {return e.suspicious !== false})
      console.log(this.transactions)
    })
   
  }

  notSuspicious(id: number){
    this.service.notSuspicious(id).subscribe(data => {
      console.log(data);
    })
  }


}
