import { Component, OnInit } from '@angular/core';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { UserService } from '../../services/userservice/usersservice.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
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
      username: ['', Validators.required],
      name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  
  onSubmit(): void {
    if (this.signupForm.valid) {
      const newUser: User = this.signupForm.value;
      this.userService.createUser(newUser).subscribe({
        next: () => {
          window.alert('User created successfully!');
          this.router.navigate(['']);
        },
        error: (error) => { 
          window.alert(error.message); 
        }
      });
    } else {
      window.alert('Please fill out the form correctly.');
    }
  }
  
}
