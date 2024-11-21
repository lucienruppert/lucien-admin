import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { environment } from "../environment";
import { EmailSendingResult } from "../types";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private baseUrl: string = environment.BASE_URL;

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) {}

  public async addEmail(email: string): Promise<string> {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("owner", '1');
    formData.append("project", 'admin');
    try {
      const result$ = this.http.post<string>(
        `${this.baseUrl}/email/add`,
        formData
      );
      const result = await firstValueFrom(result$);
      return result;
    } catch (error: unknown) {
      const typedError = error as HttpErrorResponse;
      if (typedError.error["errors"]) throw typedError.error["errors"];
      return typedError.error["errors"];
    }
  }

  public async sendEmail(): Promise<EmailSendingResult> {
    const email = this.authentication.getUserEmail();
    try {
      const result$ = this.http.post<string>(`${this.baseUrl}/email/send`, {
        email,
      });
      return (await firstValueFrom(result$)) as unknown as EmailSendingResult;
    } catch (error: unknown) {
      const typedError = error as HttpErrorResponse;
      if (typedError.error["errors"]) throw typedError.error["errors"];
      return typedError.error["errors"];
    }
  }
}
