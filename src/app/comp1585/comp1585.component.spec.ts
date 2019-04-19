import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1585Component } from './comp1585.component';

describe('Comp1585Component', () => {
  let component: Comp1585Component;
  let fixture: ComponentFixture<Comp1585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
