import { AuthenticationService } from "./../../services/authentication.service";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";

@Component({
  selector: "navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
  standalone: true,
  imports: [MatButtonModule],
})
export class NavigationComponent {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  public logout(): void {
    this.authentication.logout();
  }

  public navigateTo(route: string): void {
    this.router.navigate([`/main/${route}`]);
  }
}
