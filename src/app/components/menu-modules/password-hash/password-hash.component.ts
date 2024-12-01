import { Component } from "@angular/core";
import { PasswordHashService } from "../../../services/password-hash.service";
import { SnackBarService } from "../../../services/snackbar.service";
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "app-password-hash",
  templateUrl: "./password-hash.component.html",
  styleUrls: ["./password-hash.component.css"],
  standalone: true,
  imports: [FormsModule, MatProgressSpinnerModule, NgIf],
})
export class PasswordHashComponent {
  public password: string = "";
  public errorMessage: string = "";
  public showSpinner: boolean = false;
  public hash: string = "";

  constructor(
    private snackbar: SnackBarService,
    private passwordHash: PasswordHashService
  ) {}

  public async setPasswordHash(): Promise<void> {
    this.showSpinner = true;
    let snackbarMessage: string = "";
    try {
      this.hash = await this.passwordHash.setHashFor(this.password);
      console.log(this.hash);
      snackbarMessage = "Hash kimásolva, beillesztésre készen!";
      this.snackbar.showSnackBar(snackbarMessage);
      this.copyText();
      this.password = "";
    } catch (error: unknown) {
      const typedError = error as string;
      this.errorMessage = typedError;
    }
    this.showSpinner = false;
  }

  private copyText(): void {
    navigator.clipboard
      .writeText(this.hash)
      .catch((error) => {
        this.errorMessage = "Failed to copy text: ", error;
      });
  }
}
