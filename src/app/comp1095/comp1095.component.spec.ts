import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1095Component } from './comp1095.component';

describe('Comp1095Component', () => {
  let component: Comp1095Component;
  let fixture: ComponentFixture<Comp1095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
