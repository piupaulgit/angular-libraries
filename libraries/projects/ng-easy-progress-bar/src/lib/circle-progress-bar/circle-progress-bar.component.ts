import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.css'],
})
export class CircleProgressBarComponent implements OnInit {
  @Input()
  value: number;
  constructor() {}

  ngOnInit(): void {
    this.initProgressBar();
  }

  initProgressBar() {
    const canvas = <HTMLCanvasElement>(
      document.getElementById('circleProgressBar1')
    );
    const ctx = canvas.getContext('2d');
    var CirclePercentageValue = (2 / 100) * this.value + 1.5;
    ctx.beginPath();
    ctx.arc(100, 75, 50, 1.5 * Math.PI, CirclePercentageValue * Math.PI);
    ctx.stroke();
  }
}
