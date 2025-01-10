import { Component, OnInit } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { UserService } from '../../services/userservice/usersservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: '../../utils/form.scss'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  onSubmit(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.userService.createUser(formData).subscribe({
        next: () => {
          window.alert('User created successfully!');
          this.router.navigate(['login']);
        },
        error: (err) => {
          window.alert('Error creating user: ' + err.message);
        }
      });
    } else {
      this.showValidationErrors();
    }
  }

  private showValidationErrors(): void {
    const controls = this.signupForm.controls;
    
    if (controls['username'].hasError('maxlength')) {
      window.alert('Username cannot be more than 15 characters');
    }

    if (controls['email'].hasError('email')) {
      window.alert('Invalid email format');
    }

    if (controls['password'].hasError('minlength')) {
      window.alert('Password must be at least 6 characters long');
    }
  }
}