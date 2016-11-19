/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NominationListComponent } from './nomination-list.component';

describe('NominationListComponent', () => {
  let component: NominationListComponent;
  let fixture: ComponentFixture<NominationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
