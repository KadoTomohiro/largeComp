import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1680Component } from './comp1680.component';

describe('Comp1680Component', () => {
  let component: Comp1680Component;
  let fixture: ComponentFixture<Comp1680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
