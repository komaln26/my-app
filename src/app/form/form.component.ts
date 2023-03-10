import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formGroup: FormGroup;

  @Output() formSubmitted = new EventEmitter<any>();


  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted');
      console.log('Name:', this.formGroup?.get('name')?.value);
      console.log('Password:', this.formGroup?.get('password')?.value);
      console.log('Email:', this.formGroup?.get('email')?.value);
      console.log('Phone:', this.formGroup?.get('phone')?.value);
      console.log('Country:', this.formGroup?.get('country')?.value);
      this.formGroup.reset();
      
    } else {
      return;
    }
  }
  
  
}