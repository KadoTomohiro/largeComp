import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1975Component } from './comp1975.component';

describe('Comp1975Component', () => {
  let component: Comp1975Component;
  let fixture: ComponentFixture<Comp1975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
