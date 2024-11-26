import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { GeneralRouteGuardService } from "./services/general-route-guard.service";
import { AuthRedirectGuardService } from "./services/auth-redirect-guard.service";
import { DashboardComponent } from "./components/menu-modules/dashboard/dashboard.component";
import { EmailUploadComponent } from "./components/menu-modules/email-upload/email-upload.component";
import { EmailSendComponent } from "./components/menu-modules/email-send/email-send.component";

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
        path: "email-upload",
        component: EmailUploadComponent,
      },
      {
        path: "email-send",
        component: EmailSendComponent,
      },
    ],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
