import {inject} from "@angular/core";

import {Router} from "@angular/router";
import {AuthService} from "@demo-micro-front/shared/auth";


export const authenticationGuard = async() => {
    const oauthService: AuthService = inject(AuthService);
    const router = inject(Router);
    if (oauthService.isLoggedIn() ) {
      return true;
    }
    await router.navigate(['/login']);
    return false;
}


