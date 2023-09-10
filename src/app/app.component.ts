import { Component } from '@angular/core';
import { faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faFontAwesome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Font Awesome Icons
  faInfoCircle = faInfoCircle;
  faFont = faFontAwesome;
  faAngular = faAngular;
  faBootstrap = faBootstrap;
}
