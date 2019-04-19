import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1933Component } from './comp1933.component';

describe('Comp1933Component', () => {
  let component: Comp1933Component;
  let fixture: ComponentFixture<Comp1933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
