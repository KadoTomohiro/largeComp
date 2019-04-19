import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1957Component } from './comp1957.component';

describe('Comp1957Component', () => {
  let component: Comp1957Component;
  let fixture: ComponentFixture<Comp1957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
