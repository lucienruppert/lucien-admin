import { NavigationComponent } from './../navigation/navigation.component';
import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
})
export class MainComponent {
  constructor() {}

}
