import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { GeneralRouteGuardService } from "./services/general-route-guard.service";
import { AuthRedirectGuardService } from "./services/auth-redirect-guard.service";
import { DashboardComponent } from "./components/menu-modules/dashboard/dashboard.component";
import { EmailAddComponent } from "./components/menu-modules/email-add/email-add.component";
import { EmailSendComponent } from "./components/menu-modules/email-send/email-send.component";
import { PasswordHashComponent } from "./components/menu-modules/password-hash/password-hash.component";

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    canActivate: [AuthRedirectGuardService],
  },
  {
    path: "main",
    component: MainComponent,
    canActivate: [GeneralRouteGuardService],
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "email/add",
        component: EmailAddComponent,
      },
      {
        path: "email/send",
        component: EmailSendComponent,
      },
      {
        path: "password/hash",
        component: PasswordHashComponent,
      },
    ],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
