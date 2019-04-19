import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp570Component } from './comp570.component';

describe('Comp570Component', () => {
  let component: Comp570Component;
  let fixture: ComponentFixture<Comp570Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp570Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
