import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1584Component } from './comp1584.component';

describe('Comp1584Component', () => {
  let component: Comp1584Component;
  let fixture: ComponentFixture<Comp1584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
