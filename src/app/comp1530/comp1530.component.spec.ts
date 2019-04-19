import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1530Component } from './comp1530.component';

describe('Comp1530Component', () => {
  let component: Comp1530Component;
  let fixture: ComponentFixture<Comp1530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
