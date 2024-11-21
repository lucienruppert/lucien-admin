import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SnackBarService } from '../../../services/snackbar.service';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: "app-email-upload",
  templateUrl: "./email-upload.component.html",
  styleUrls: ["./email-upload.component.css"],
  standalone: true,
  imports: [FormsModule, MatProgressSpinnerModule, NgIf],
})
export class EmailUploadComponent {
  public email: string = "";
  public errorMessage: string = "";
  public showSpinner: boolean = false;

  constructor(
    private snackbar: SnackBarService,
    private emailService: EmailService,
  ) {}

  public async submitForm(): Promise<void> {
    this.showSpinner = true;
    let snackbarMessage: string = "";
    try {
      await this.emailService.addEmail(this.email);
      snackbarMessage = "Az email hozzáadása sikerült.";
      this.snackbar.showSnackBar(snackbarMessage);
      this.email = "";
    } catch (error: unknown) {
      const typedError = error as string;
      this.errorMessage = typedError;
    }
    this.showSpinner = false;
  }
}
