import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthRedirectGuardService {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    const isAuthenticated = this.authentication.getUserEmail();
    if (isAuthenticated) {
      this.router.navigate(["/main"]);
      return false;
    }
    return true;
  }
}
