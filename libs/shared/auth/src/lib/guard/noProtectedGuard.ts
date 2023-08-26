import { Router} from "@angular/router";
import {inject} from "@angular/core";
import { AuthService } from "../services/auth.service";

export const notAuthenticationGuard = async() => {
    const oauthService: AuthService = inject(AuthService);
    const router = inject(Router);
    if (!oauthService.isLoggedIn() ) {
      return true;
    }
    await router.navigate(['/']);
    return false;

}
