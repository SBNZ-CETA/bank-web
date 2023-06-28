import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSuspiciousComponent } from './transaction-suspicious.component';

describe('TransactionSuspiciousComponent', () => {
  let component: TransactionSuspiciousComponent;
  let fixture: ComponentFixture<TransactionSuspiciousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionSuspiciousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionSuspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
