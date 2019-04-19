import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1035Component } from './comp1035.component';

describe('Comp1035Component', () => {
  let component: Comp1035Component;
  let fixture: ComponentFixture<Comp1035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
