export interface AuthApi {
  login(credentials: any): Promise<any>;
  logout(): Promise<void>;
  check(): Promise<any>;
}
