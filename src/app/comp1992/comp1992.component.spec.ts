import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1992Component } from './comp1992.component';

describe('Comp1992Component', () => {
  let component: Comp1992Component;
  let fixture: ComponentFixture<Comp1992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
