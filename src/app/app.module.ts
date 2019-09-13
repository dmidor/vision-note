import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgOpenCVModule } from 'ng-open-cv';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WebcamModule } from 'ngx-webcam';


// const openCVConfig = {
//   scriptUrl: 'assets/opencv/asm/3.4/opencv.js',
//   usingWasm: false,
//   locateFile: this.locateFile.bind(this),
//   onRuntimeInitialized: () => {}
// };
//
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgOpenCVModule.forRoot(openCVConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
