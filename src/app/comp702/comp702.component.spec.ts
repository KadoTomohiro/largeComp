import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp702Component } from './comp702.component';

describe('Comp702Component', () => {
  let component: Comp702Component;
  let fixture: ComponentFixture<Comp702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
