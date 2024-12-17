export interface UserModel {
  id?: number;
  email: string;
  password: string;
  is2FAEnabled: boolean;
  twoFaSecret: string;
}
