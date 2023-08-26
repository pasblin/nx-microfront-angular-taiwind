import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withFetch, withInterceptorsFromDi, withJsonpSupport} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withJsonpSupport(),withInterceptorsFromDi(),withFetch()),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
};
