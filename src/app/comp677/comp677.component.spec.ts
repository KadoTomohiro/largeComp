import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp677Component } from './comp677.component';

describe('Comp677Component', () => {
  let component: Comp677Component;
  let fixture: ComponentFixture<Comp677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
