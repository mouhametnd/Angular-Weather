import {  Component, Input } from '@angular/core';

@Component({
  selector: 'top-banner',
  templateUrl: './top-banner.component.html',
})
export class TopBannerComponent {

  @Input() name: string = '';
  @Input() degree: number = 0;

  setBannerImg() {
    return this.degree < 13 ? '../assets/freeze-day.jpg' : '../assets/hot.jpg';
  }
}
