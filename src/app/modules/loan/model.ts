export interface LoanDto {
  requestedAmount: number;
  rates: number;
  workStatus: number;
  startingWorkDateIfEmployed: string;
  expirationWorkDateIfLimited: string;
}

export interface Loan extends LoanDto {
  user: unknown;
  id: number;
}

export interface AvailableLoan {
  id: number;
  minimumPaymentDeadline: number;
  maximumPaymentDeadline: number;
  loanAmount: number;
}
