import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1726Component } from './comp1726.component';

describe('Comp1726Component', () => {
  let component: Comp1726Component;
  let fixture: ComponentFixture<Comp1726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
