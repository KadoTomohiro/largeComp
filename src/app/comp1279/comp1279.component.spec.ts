import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1279Component } from './comp1279.component';

describe('Comp1279Component', () => {
  let component: Comp1279Component;
  let fixture: ComponentFixture<Comp1279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
