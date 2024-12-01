import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environment';

@Injectable({
  providedIn: "root",
})
export class PasswordHashService {
  private baseUrl: string = environment.BASE_URL;

  constructor(
    private http: HttpClient,
  ) {}

  public async setHashFor(password: string): Promise<string> {
    const formData = new FormData();
    formData.append("password", password);
    try {
      const result$ = this.http.post<string>(
        `${this.baseUrl}/password/hash`,
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
}
