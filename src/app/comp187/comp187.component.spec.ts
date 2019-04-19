import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp187Component } from './comp187.component';

describe('Comp187Component', () => {
  let component: Comp187Component;
  let fixture: ComponentFixture<Comp187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
