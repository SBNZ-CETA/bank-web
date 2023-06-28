export interface LoanDto {
  requestedAmount: number;
  rates: number;
  workStatus: number;
  startingWorkDateIfEmployed: string;
  expirationWorkDateIfLimited: string;
}

export interface Loan extends LoanDto {
  user: unknown;
  id: string;
}
