import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1194Component } from './comp1194.component';

describe('Comp1194Component', () => {
  let component: Comp1194Component;
  let fixture: ComponentFixture<Comp1194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
