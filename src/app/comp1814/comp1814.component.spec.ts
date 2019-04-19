import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1814Component } from './comp1814.component';

describe('Comp1814Component', () => {
  let component: Comp1814Component;
  let fixture: ComponentFixture<Comp1814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
