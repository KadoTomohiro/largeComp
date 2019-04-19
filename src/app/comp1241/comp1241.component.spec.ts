import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1241Component } from './comp1241.component';

describe('Comp1241Component', () => {
  let component: Comp1241Component;
  let fixture: ComponentFixture<Comp1241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
