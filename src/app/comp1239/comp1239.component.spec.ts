import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1239Component } from './comp1239.component';

describe('Comp1239Component', () => {
  let component: Comp1239Component;
  let fixture: ComponentFixture<Comp1239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
