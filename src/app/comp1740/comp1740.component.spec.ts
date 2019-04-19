import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1740Component } from './comp1740.component';

describe('Comp1740Component', () => {
  let component: Comp1740Component;
  let fixture: ComponentFixture<Comp1740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
