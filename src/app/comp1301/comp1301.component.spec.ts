import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1301Component } from './comp1301.component';

describe('Comp1301Component', () => {
  let component: Comp1301Component;
  let fixture: ComponentFixture<Comp1301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
