import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1963Component } from './comp1963.component';

describe('Comp1963Component', () => {
  let component: Comp1963Component;
  let fixture: ComponentFixture<Comp1963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
