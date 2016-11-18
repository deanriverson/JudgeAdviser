/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RobotPerformanceListComponent } from './robot-performance-list.component';

describe('RobotPerformanceListComponent', () => {
  let component: RobotPerformanceListComponent;
  let fixture: ComponentFixture<RobotPerformanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotPerformanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotPerformanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
