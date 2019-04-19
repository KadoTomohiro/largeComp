import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1019Component } from './comp1019.component';

describe('Comp1019Component', () => {
  let component: Comp1019Component;
  let fixture: ComponentFixture<Comp1019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
