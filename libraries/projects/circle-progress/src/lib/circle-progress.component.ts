import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'easy-circle-progress',
  templateUrl: './circle-progress.html',
  styles: [
  ]
})
export class CircleProgressComponent implements OnInit, OnChanges {
  @Input()
  percentage;
  constructor() { }

  ngOnChanges(){
    console.log(this.percentage)
    console.log('ooo')
  }
  ngOnInit(): void {
    console.log(this.percentage)
    console.log('ooo')
  }

}
