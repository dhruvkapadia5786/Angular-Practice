import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value)
      this.authService.onLogin(this.loginForm.value).subscribe({
        next:(value: any)=> {
          this.router.navigate(['dashboard']);
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
