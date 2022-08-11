import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-city',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() defValue: string = 'dakar';
  @Output() emitter = new EventEmitter();

  onChange(value: string) {
    this.emitter.emit(value.trim().toLowerCase());
  }
}
