import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1612Component } from './comp1612.component';

describe('Comp1612Component', () => {
  let component: Comp1612Component;
  let fixture: ComponentFixture<Comp1612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
