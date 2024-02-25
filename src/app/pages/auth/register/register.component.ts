import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: new FormControl('',[Validators.required]), 
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]), 
    });
  }

  onSubmitOne() {
    if (this.registerForm.valid) {
      // Perform registration logic here
      console.log(this.registerForm.value);
      this.authService.onRegister(this.registerForm.value).subscribe({
        next: (value) => {
          this.router.navigate(['dashboard']);
        }
      })
      // You can send the form value to your backend for registration
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
