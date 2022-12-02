import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EnemigosComponent } from './pages/enemigos/enemigos.component';
import { DescargarComponent } from './pages/descargar/descargar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './cache/cacheInterceptor.class';
import { PrincipalComponent } from './pages/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EnemigosComponent,
    DescargarComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
