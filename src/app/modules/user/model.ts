export interface LoginUser {
  username: string;
  password: string;
}
export interface RegisterUser {
   name: string;
   surname: string;
   username: string;
   password: string;
   email: string;
   age: number;
}

export interface JWTResponse{
   access_token:string;
}

