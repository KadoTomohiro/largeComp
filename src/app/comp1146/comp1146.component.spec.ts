import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1146Component } from './comp1146.component';

describe('Comp1146Component', () => {
  let component: Comp1146Component;
  let fixture: ComponentFixture<Comp1146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
