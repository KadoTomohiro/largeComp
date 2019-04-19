import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1669Component } from './comp1669.component';

describe('Comp1669Component', () => {
  let component: Comp1669Component;
  let fixture: ComponentFixture<Comp1669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
