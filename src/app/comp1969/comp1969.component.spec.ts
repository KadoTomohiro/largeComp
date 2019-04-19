import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1969Component } from './comp1969.component';

describe('Comp1969Component', () => {
  let component: Comp1969Component;
  let fixture: ComponentFixture<Comp1969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
