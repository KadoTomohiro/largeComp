import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1540Component } from './comp1540.component';

describe('Comp1540Component', () => {
  let component: Comp1540Component;
  let fixture: ComponentFixture<Comp1540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
