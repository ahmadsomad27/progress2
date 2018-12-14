/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArsipListComponent } from './arsip-list.component';

describe('ArsipListComponent', () => {
  let component: ArsipListComponent;
  let fixture: ComponentFixture<ArsipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArsipListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArsipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
