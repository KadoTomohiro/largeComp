import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1705Component } from './comp1705.component';

describe('Comp1705Component', () => {
  let component: Comp1705Component;
  let fixture: ComponentFixture<Comp1705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
