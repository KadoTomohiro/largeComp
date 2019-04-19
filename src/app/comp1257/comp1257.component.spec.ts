import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1257Component } from './comp1257.component';

describe('Comp1257Component', () => {
  let component: Comp1257Component;
  let fixture: ComponentFixture<Comp1257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
