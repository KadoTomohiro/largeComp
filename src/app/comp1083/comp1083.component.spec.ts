import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1083Component } from './comp1083.component';

describe('Comp1083Component', () => {
  let component: Comp1083Component;
  let fixture: ComponentFixture<Comp1083Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1083Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1083Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
