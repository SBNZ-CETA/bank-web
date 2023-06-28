import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoansService } from '../loans.service';
import { AvailableLoan } from '../model';

@Component({
  selector: 'app-list-available',
  templateUrl: './list-available.component.html',
  styleUrls: ['./list-available.component.css']
})
export class ListAvailableComponent {
  public loans: AvailableLoan[] = [];

  constructor(
    private service: LoansService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.listAvailableLoans(+(params.get('id') ?? 0)).subscribe(data => {
        this.loans = data
        console.log(this.loans)
      })
    })

  }
}
