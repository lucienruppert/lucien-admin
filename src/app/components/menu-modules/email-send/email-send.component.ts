import { Component } from '@angular/core';
import { EmailService } from '../../../services/email.service';
import { SnackBarService } from '../../../services/snackbar.service';
import { EmailSendingResult } from '../../../types';

@Component({
  selector: "app-email-send",
  templateUrl: "./email-send.component.html",
  styleUrls: ["./email-send.component.css"],
})
export class EmailSendComponent {
  public errorMessage: string = "";

  constructor(
    private emailService: EmailService,
    private snackbar: SnackBarService
  ) {}

  public async sendEmail(): Promise<void> {
    let snackbarMessage: string = "";
    try {
      const result: EmailSendingResult = await this.emailService.sendEmail();
      const numberOfEmailsSent: string = result.sent;
      snackbarMessage = `${numberOfEmailsSent} db email kiküldésre került.`;
      this.snackbar.showSnackBar(snackbarMessage);
    } catch (error: unknown) {
      const typedError = error as string;
      this.errorMessage = typedError;
      console.log(this.errorMessage);
    }
  }
}
