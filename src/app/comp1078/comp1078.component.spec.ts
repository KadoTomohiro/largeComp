import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1078Component } from './comp1078.component';

describe('Comp1078Component', () => {
  let component: Comp1078Component;
  let fixture: ComponentFixture<Comp1078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
