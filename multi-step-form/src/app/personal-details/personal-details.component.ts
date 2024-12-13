import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-details-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent {
  personalInfoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });

  public onSubmit(): void {
    console.log(
      'Submitted form',
      this.personalInfoForm.value,
      this.personalInfoForm.invalid
    );
  }
}
