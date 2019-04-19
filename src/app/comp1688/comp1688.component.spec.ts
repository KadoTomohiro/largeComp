import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1688Component } from './comp1688.component';

describe('Comp1688Component', () => {
  let component: Comp1688Component;
  let fixture: ComponentFixture<Comp1688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
