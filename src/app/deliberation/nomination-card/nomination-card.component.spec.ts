/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NominationCardComponent } from './nomination-card.component';

describe('NominationCardComponent', () => {
  let component: NominationCardComponent;
  let fixture: ComponentFixture<NominationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
