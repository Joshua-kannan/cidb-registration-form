import { Component } from '@angular/core';
import { RegistrationFormComponent } from './registration-form/registration-form.component';  // Import your standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Enable standalone mode
  imports: [RegistrationFormComponent]  // Import the standalone registration form component
})
export class AppComponent {
  title = 'registration-form';  // Optional
}
