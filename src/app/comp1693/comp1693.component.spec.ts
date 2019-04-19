import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1693Component } from './comp1693.component';

describe('Comp1693Component', () => {
  let component: Comp1693Component;
  let fixture: ComponentFixture<Comp1693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
