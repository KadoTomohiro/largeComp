import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1598Component } from './comp1598.component';

describe('Comp1598Component', () => {
  let component: Comp1598Component;
  let fixture: ComponentFixture<Comp1598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
