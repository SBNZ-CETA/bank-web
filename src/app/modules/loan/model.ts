export interface LoanDto {
  requestedAmount: number;
  rates: number;
  workStatus: number;
  startingWorkDateIfEmployed: string;
  expirationWorkDateIfLimited: string;
}
