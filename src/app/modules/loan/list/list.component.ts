import { Component } from '@angular/core';
import { LoansService } from '../loans.service';
import { Loan } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public loans: Loan[] = [];

  constructor(
    private service: LoansService
  ){}


  ngOnInit() {
    this.service.listAll().subscribe(data => this.loans = data)
  }


}
