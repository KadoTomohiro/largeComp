import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1091Component } from './comp1091.component';

describe('Comp1091Component', () => {
  let component: Comp1091Component;
  let fixture: ComponentFixture<Comp1091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
