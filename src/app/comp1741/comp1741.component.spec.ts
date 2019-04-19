import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1741Component } from './comp1741.component';

describe('Comp1741Component', () => {
  let component: Comp1741Component;
  let fixture: ComponentFixture<Comp1741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
