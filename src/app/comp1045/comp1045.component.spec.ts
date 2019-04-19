import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1045Component } from './comp1045.component';

describe('Comp1045Component', () => {
  let component: Comp1045Component;
  let fixture: ComponentFixture<Comp1045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
