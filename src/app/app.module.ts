import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputComponent } from './ui/input/input.component';
import { PanelBottomComponent } from './ui/panel-bottom/panel-bottom.component';
import { TopBannerComponent } from './ui/top-banner/top-banner.component';
import { APIService } from './services/api.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TopBannerComponent,
    PanelBottomComponent,
  ],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
