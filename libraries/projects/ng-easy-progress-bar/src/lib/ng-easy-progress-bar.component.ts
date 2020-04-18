import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ng-easy-progress-bar',
  templateUrl: 'ng-easy-progress-bar.html',
  styles: [],
})
export class NgEasyProgressBarComponent implements OnInit, OnChanges {
  @Input()
  type: string;
  @Input()
  value: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.type.toLowerCase() === 'cicle') {
    }
  }
}
