import { Component } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  handleSubmitForm() {
    if (this.contactForm.valid) {
      console.log('Form is valid. Submitting...');
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
    

  }
}
