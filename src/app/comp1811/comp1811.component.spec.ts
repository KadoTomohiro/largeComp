import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1811Component } from './comp1811.component';

describe('Comp1811Component', () => {
  let component: Comp1811Component;
  let fixture: ComponentFixture<Comp1811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
