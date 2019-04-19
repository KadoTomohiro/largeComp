import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1097Component } from './comp1097.component';

describe('Comp1097Component', () => {
  let component: Comp1097Component;
  let fixture: ComponentFixture<Comp1097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
