import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1144Component } from './comp1144.component';

describe('Comp1144Component', () => {
  let component: Comp1144Component;
  let fixture: ComponentFixture<Comp1144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
