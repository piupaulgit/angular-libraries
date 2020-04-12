import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEasyProgressBarComponent } from './ng-easy-progress-bar.component';

describe('NgEasyProgressBarComponent', () => {
  let component: NgEasyProgressBarComponent;
  let fixture: ComponentFixture<NgEasyProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgEasyProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEasyProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
