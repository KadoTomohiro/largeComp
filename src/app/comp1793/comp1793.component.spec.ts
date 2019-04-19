import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1793Component } from './comp1793.component';

describe('Comp1793Component', () => {
  let component: Comp1793Component;
  let fixture: ComponentFixture<Comp1793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
