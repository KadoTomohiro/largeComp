import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1345Component } from './comp1345.component';

describe('Comp1345Component', () => {
  let component: Comp1345Component;
  let fixture: ComponentFixture<Comp1345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
