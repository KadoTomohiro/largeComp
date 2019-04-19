import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp208Component } from './comp208.component';

describe('Comp208Component', () => {
  let component: Comp208Component;
  let fixture: ComponentFixture<Comp208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
