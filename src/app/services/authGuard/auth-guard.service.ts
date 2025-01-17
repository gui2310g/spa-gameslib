import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../userservice/usersservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    if(!this.userService.isLoggedIn()) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
