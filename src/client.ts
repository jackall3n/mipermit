import axios, { AxiosInstance } from "axios";
import { GetActivePermitsResponse } from "./types";

interface MiPermitOptions {
  baseUrl?: string;
  accessToken?: string;
}

export enum RequestTypes {
  GET_ACCOUNT_ACTIVE_PERMITS = "GETACCOUNTACTIVEPERMITS",
}

export class MiPermit {
  http: AxiosInstance;

  constructor(public options: MiPermitOptions) {
    const { baseUrl = "https://live.consumergateway.mipermit.net" } = options;

    this.http = axios.create({
      baseURL: baseUrl,
    });
  }

  setAccessToken(accessToken: string) {
    this.options.accessToken = accessToken;

    return this;
  }

  async get<T>(type: RequestTypes): Promise<T> {
    const body = this.createBody({
      L: this.options.accessToken!,
      T: type,
    });

    const { data } = await this.http.post<T>(
      "Device/ConsumerSmartPhone.aspx",
      body,
    );

    return data;
  }

  async getActivePermits() {
    return this.get<GetActivePermitsResponse>(
      RequestTypes.GET_ACCOUNT_ACTIVE_PERMITS,
    );
  }

  static create(options: MiPermitOptions = {}) {
    return new MiPermit(options);
  }

  createBody(body: Record<string, string>) {
    const data = new FormData();

    for (const key in body) {
      data.append(key, body[key]);
    }

    return data;
  }
}
