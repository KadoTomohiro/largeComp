import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1020Component } from './comp1020.component';

describe('Comp1020Component', () => {
  let component: Comp1020Component;
  let fixture: ComponentFixture<Comp1020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
