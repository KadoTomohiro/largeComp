import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1198Component } from './comp1198.component';

describe('Comp1198Component', () => {
  let component: Comp1198Component;
  let fixture: ComponentFixture<Comp1198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
