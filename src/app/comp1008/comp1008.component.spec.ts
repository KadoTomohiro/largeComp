import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1008Component } from './comp1008.component';

describe('Comp1008Component', () => {
  let component: Comp1008Component;
  let fixture: ComponentFixture<Comp1008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
