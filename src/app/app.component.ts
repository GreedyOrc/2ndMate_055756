import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2ndMate_055756';
}
