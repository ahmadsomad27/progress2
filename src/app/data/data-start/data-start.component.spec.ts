/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataStartComponent } from './data-start.component';

describe('DataStartComponent', () => {
  let component: DataStartComponent;
  let fixture: ComponentFixture<DataStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
