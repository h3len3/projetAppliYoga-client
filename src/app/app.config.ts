import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import  Material from '@primeng/themes/material';
import {providePrimeNG} from 'primeng/config';
import { routes } from './app.routes';
import { FullCalendarModule } from '@fullcalendar/angular';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([
    ])),
    providePrimeNG({
      theme: { preset: Material }
    }),
    MessageService,
    ConfirmationService,
    importProvidersFrom(FullCalendarModule)
  ]
  
};
