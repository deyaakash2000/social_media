import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStep2Component } from './update-step2.component';

describe('UpdateStep2Component', () => {
  let component: UpdateStep2Component;
  let fixture: ComponentFixture<UpdateStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
