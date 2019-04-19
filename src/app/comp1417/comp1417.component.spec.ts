import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1417Component } from './comp1417.component';

describe('Comp1417Component', () => {
  let component: Comp1417Component;
  let fixture: ComponentFixture<Comp1417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
