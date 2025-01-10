import { Component, OnInit } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { UserService } from '../../services/userservice/usersservice.service';
import { Router } from '@angular/router';
import { LoggedUser } from '../../models/user.model';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: '../../utils/form.scss'
})
export class SigninComponent implements OnInit{
  signInForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  )  {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required]
    }) 
  }

  onSubmit(): void {
    if(this.signInForm.valid) {
      const user: LoggedUser = this.signInForm.value;
      this.userService.loginUser(user).subscribe({
        next: () => {
          window.alert('User logged in successfully!');
          this.router.navigate(['']); 
        },
        error: (error) => {
          console.error('Login error:', error);
          window.alert('Login failed. Please try again.');
        }
      });
    }
  }
  
}
