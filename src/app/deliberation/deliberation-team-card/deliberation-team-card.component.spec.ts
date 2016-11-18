/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeliberationTeamCardComponent } from './deliberation-team-card.component';

describe('DeliberationTeamCardComponent', () => {
  let component: DeliberationTeamCardComponent;
  let fixture: ComponentFixture<DeliberationTeamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliberationTeamCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliberationTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
