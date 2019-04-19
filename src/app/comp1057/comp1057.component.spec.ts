import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1057Component } from './comp1057.component';

describe('Comp1057Component', () => {
  let component: Comp1057Component;
  let fixture: ComponentFixture<Comp1057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
