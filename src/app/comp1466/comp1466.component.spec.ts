import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1466Component } from './comp1466.component';

describe('Comp1466Component', () => {
  let component: Comp1466Component;
  let fixture: ComponentFixture<Comp1466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
