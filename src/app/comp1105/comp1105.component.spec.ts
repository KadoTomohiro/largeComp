import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1105Component } from './comp1105.component';

describe('Comp1105Component', () => {
  let component: Comp1105Component;
  let fixture: ComponentFixture<Comp1105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
