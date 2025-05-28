import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';

import { routes } from './app.routes';
import { dataReducer } from '../store/data.reducer';
import { DataEffects } from '../store/data.effects';
import { DataService } from '../services/data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    DataService,
    provideHttpClient(),
    provideRouter(routes),
    provideStore({
      data: dataReducer
    }),
    provideEffects([DataEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    })
  ]
};
