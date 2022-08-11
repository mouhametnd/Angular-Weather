import { Component, Input } from '@angular/core';
import { IAPIResponse } from 'src/app/types/api-response';

@Component({
  selector: 'panel-bottom',
  templateUrl: './panel-bottom.component.html',
})
export class PanelBottomComponent {
  @Input() current: IAPIResponse['current'] | null = null;

  trackById(_: unknown, { img }: { value: string; img: string }) {
    return img;
  }

  getContent() {
    const current = this.current;
    return [
      {
        value: `${current?.wind_kph} KM/H`,
        img: '../assets/wind.png',
      },
      {
        value: `${current?.temp_c}°C`,
        img: '../assets/temp.png',
      },
      {
        value: `${current?.vis_km}%`,
        img: '../assets/visibility.png',
      },
      {
        value: `${current?.humidity} KM`,
        img: '../assets/humidity.png',
      },
    ];
  }
}
