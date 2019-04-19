import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1625Component } from './comp1625.component';

describe('Comp1625Component', () => {
  let component: Comp1625Component;
  let fixture: ComponentFixture<Comp1625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
