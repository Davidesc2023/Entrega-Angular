import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // Cambia aquí

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Proporciona el renderizado del servidor
  ]
};

// Combina la configuración
export const config: ApplicationConfig = mergeApplicationConfig(appConfig, serverConfig); // Cambia aquí
