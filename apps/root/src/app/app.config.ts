import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {provideHttpClient, withFetch, withInterceptorsFromDi, withJsonpSupport} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withJsonpSupport(),withInterceptorsFromDi(),withFetch()),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
};
