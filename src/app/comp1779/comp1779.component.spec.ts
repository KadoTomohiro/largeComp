import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1779Component } from './comp1779.component';

describe('Comp1779Component', () => {
  let component: Comp1779Component;
  let fixture: ComponentFixture<Comp1779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
