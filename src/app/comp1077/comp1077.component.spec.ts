import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1077Component } from './comp1077.component';

describe('Comp1077Component', () => {
  let component: Comp1077Component;
  let fixture: ComponentFixture<Comp1077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
