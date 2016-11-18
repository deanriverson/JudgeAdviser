/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AwardSlotComponent } from './award-slot.component';

describe('AwardSlotComponent', () => {
  let component: AwardSlotComponent;
  let fixture: ComponentFixture<AwardSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
