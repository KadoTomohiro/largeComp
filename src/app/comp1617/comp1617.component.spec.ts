import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1617Component } from './comp1617.component';

describe('Comp1617Component', () => {
  let component: Comp1617Component;
  let fixture: ComponentFixture<Comp1617Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1617Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
