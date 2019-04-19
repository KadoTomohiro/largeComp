import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1046Component } from './comp1046.component';

describe('Comp1046Component', () => {
  let component: Comp1046Component;
  let fixture: ComponentFixture<Comp1046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
