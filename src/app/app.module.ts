import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './ui/input/input.component';
import { PanelBottomComponent } from './ui/panel-bottom/panel-bottom.component';
import { TopBannerComponent } from './ui/top-banner/top-banner.component';

@NgModule({
  declarations: [AppComponent, InputComponent, TopBannerComponent,PanelBottomComponent ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
