/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

enum httpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

class CommonService {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL: baseURL,
    });
  }

  private async httpRequest<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.request<T>(config);
      return response.data;
    } catch (err) {
      console.log("Error:", err);
      throw err;
    }
  }

  protected async get<T>(
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, any>
  ) {
    return this.httpRequest<T>({
      method: httpMethods.GET,
      url,
      params,
      headers,
    });
  }

  protected async post<T>(
    url: string,
    data: any,
    params?: Record<string, any>,
    headers?: Record<string, any>
  ) {
    return this.httpRequest<T>({
      method: httpMethods.POST,
      url,
      data,
      params,
      headers,
    });
  }

  protected async put<T>(
    url: string,
    data: any,
    headers?: Record<string, any>,
    params?: Record<string, any>
  ) {
    return this.httpRequest<T>({
      method: httpMethods.PUT,
      url,
      data,
      params,
      headers,
    });
  }

  protected async delete<T>(
    url: string,
    data?: any,
    params?: Record<string, any>,
    headers?: Record<string, any>
  ) {
    return this.httpRequest<T>({
      method: httpMethods.DELETE,
      url,
      data,
      params,
      headers,
    });
  }
}

export default CommonService;
