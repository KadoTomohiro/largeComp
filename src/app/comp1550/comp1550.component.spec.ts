import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1550Component } from './comp1550.component';

describe('Comp1550Component', () => {
  let component: Comp1550Component;
  let fixture: ComponentFixture<Comp1550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
