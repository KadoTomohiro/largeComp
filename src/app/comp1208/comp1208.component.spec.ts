import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1208Component } from './comp1208.component';

describe('Comp1208Component', () => {
  let component: Comp1208Component;
  let fixture: ComponentFixture<Comp1208Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1208Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
