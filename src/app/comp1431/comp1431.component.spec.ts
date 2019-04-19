import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1431Component } from './comp1431.component';

describe('Comp1431Component', () => {
  let component: Comp1431Component;
  let fixture: ComponentFixture<Comp1431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
