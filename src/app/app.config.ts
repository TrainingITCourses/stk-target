import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { metricsInterceptor } from '@stk/core';
import { provideCrudRepository } from '@stk/srv';
import { DATE_FORMAT } from '@stk/ui';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([metricsInterceptor])),
    provideCrudRepository(environment.apiUri),
    { provide: DATE_FORMAT, useValue: environment.dateFormat },
  ],
};
