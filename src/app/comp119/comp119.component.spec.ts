import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp119Component } from './comp119.component';

describe('Comp119Component', () => {
  let component: Comp119Component;
  let fixture: ComponentFixture<Comp119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
