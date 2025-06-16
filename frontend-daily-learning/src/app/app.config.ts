import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MarkdownModule } from 'ngx-markdown';
import { importProvidersFrom } from '@angular/core';
import { provideMarkdown } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideMarkdown(),  
    importProvidersFrom(MarkdownModule.forRoot()),

  ]
};
