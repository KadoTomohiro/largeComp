import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1966Component } from './comp1966.component';

describe('Comp1966Component', () => {
  let component: Comp1966Component;
  let fixture: ComponentFixture<Comp1966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
