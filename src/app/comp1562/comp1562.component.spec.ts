import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1562Component } from './comp1562.component';

describe('Comp1562Component', () => {
  let component: Comp1562Component;
  let fixture: ComponentFixture<Comp1562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
