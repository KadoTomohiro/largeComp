import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1366Component } from './comp1366.component';

describe('Comp1366Component', () => {
  let component: Comp1366Component;
  let fixture: ComponentFixture<Comp1366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
