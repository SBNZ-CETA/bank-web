export interface Transaction {
  id: number;
  amount: number;
  suspicious: boolean;
  confirmed: boolean;
  transactionTime: Date;
  location: string;
  senderAccount: Account;
  receiverAccount: Account;
}

export interface Account {
  balance: number;
  user: UserInfo;
} 

export interface UserInfo {
  username: string;
  name: string;
  surname: string;
}