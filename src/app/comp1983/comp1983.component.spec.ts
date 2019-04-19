import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1983Component } from './comp1983.component';

describe('Comp1983Component', () => {
  let component: Comp1983Component;
  let fixture: ComponentFixture<Comp1983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
