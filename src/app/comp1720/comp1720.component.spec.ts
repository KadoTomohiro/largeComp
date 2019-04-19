import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1720Component } from './comp1720.component';

describe('Comp1720Component', () => {
  let component: Comp1720Component;
  let fixture: ComponentFixture<Comp1720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
