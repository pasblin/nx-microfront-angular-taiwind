import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'demo-micro-front-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authservice: AuthService = inject(AuthService);
  router: Router = inject(Router);
  async onLogin() {
    this.authservice.login();
    await this.router.navigate(['/']);
  }
}
