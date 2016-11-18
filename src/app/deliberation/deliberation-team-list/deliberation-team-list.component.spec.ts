/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeliberationTeamListComponent } from './deliberation-team-list.component';

describe('DeliberationTeamListComponent', () => {
  let component: DeliberationTeamListComponent;
  let fixture: ComponentFixture<DeliberationTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliberationTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliberationTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
