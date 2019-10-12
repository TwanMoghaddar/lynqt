import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageLauncherComponent } from './page-launcher/page-launcher.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLauncherComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
