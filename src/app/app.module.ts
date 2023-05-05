import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {
  SpeechRecognitionModule,
  SpeechRecognitionService,
  RxSpeechRecognitionService
} from '@kamiazya/ngx-speech-recognition';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SpeechRecognitionModule.withConfig({
      lang: 'pt-BR',
      interimResults: true,
      maxAlternatives: 1
    })
  ],
  providers: [SpeechRecognitionService, RxSpeechRecognitionService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
