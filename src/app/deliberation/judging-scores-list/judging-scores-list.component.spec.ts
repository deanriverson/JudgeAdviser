/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JudgingScoresListComponent } from './judging-scores-list.component';

describe('JudgingScoresListComponent', () => {
  let component: JudgingScoresListComponent;
  let fixture: ComponentFixture<JudgingScoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgingScoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgingScoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
