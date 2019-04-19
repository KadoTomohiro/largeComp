import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1500Component } from './comp1500.component';

describe('Comp1500Component', () => {
  let component: Comp1500Component;
  let fixture: ComponentFixture<Comp1500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
