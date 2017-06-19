//место загрузки сторонних библиоек и сервисов
import { Inject, InjectionToken } from '@angular/core';

export let OPAQUE_TOKEN = new InjectionToken ('app.config');

// set interface for APP_CONFIG
export interface AppConfig {
  apiEndpoint: String;
  // another key: number;
}

// set global variables
export const APP_CONFIG: AppConfig = {
  apiEndpoint: 'https://your.domain.com'
  // another key: 12345
};

export let OpaqueTokenProvider = {
  provider: OPAQUE_TOKEN,
  useValue: APP_CONFIG
};