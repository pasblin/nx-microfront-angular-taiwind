import { Router} from "@angular/router";
import {AuthService} from "@demo-micro-front/shared/auth";
import {inject} from "@angular/core";

export const notAuthenticationGuard = async() => {
    const oauthService: AuthService = inject(AuthService);
    const router = inject(Router);
    if (!oauthService.isLoggedIn() ) {
      return true;
    }
    await router.navigate(['/']);
    return false;

}
