import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private service: LoansService,
    private router: Router,
  ){}


  ngOnInit() {
    this.service.listAll().subscribe(data => this.loans = data)
  }


  getAvailable(id: number) {
    console.log(id)
    this.router.navigate(['loans', id])
  }
}
