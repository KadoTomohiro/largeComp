import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp848Component } from './comp848.component';

describe('Comp848Component', () => {
  let component: Comp848Component;
  let fixture: ComponentFixture<Comp848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
