import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1425Component } from './comp1425.component';

describe('Comp1425Component', () => {
  let component: Comp1425Component;
  let fixture: ComponentFixture<Comp1425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
