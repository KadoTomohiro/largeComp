import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1682Component } from './comp1682.component';

describe('Comp1682Component', () => {
  let component: Comp1682Component;
  let fixture: ComponentFixture<Comp1682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
