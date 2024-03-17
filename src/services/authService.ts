/* eslint-disable @typescript-eslint/no-explicit-any */
import CommonService from "./baseService";
import { serviceUrls } from "../constants/urls";

export class AuthService extends CommonService {
  constructor() {
    super("http://localhost:3000");
  }
  async signupUser(
    email?: string,
    phoneNumber?: string,
    password?: string
  ): Promise<any> {
    const baseUrl = serviceUrls.signup;
    const body = { email, phoneNumber, password };
    try {
      const result = this.post(baseUrl, body);
      return result;
    } catch (error: Error) {
      throw new Error(`errro: ${error.message}`);
    }
  }
  async loginUser(email?: string, password?: string): Promise<any> {
    const path = serviceUrls.login;
    const body = { email, password };

    try {
      const result = await this.post(path, body);
      return result;
    } catch (error: Error) {
      console.log(error);
      // throw new Error(`error: ${error.message}`);
    }
  }
}
