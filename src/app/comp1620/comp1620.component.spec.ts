import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1620Component } from './comp1620.component';

describe('Comp1620Component', () => {
  let component: Comp1620Component;
  let fixture: ComponentFixture<Comp1620Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1620Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1620Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
