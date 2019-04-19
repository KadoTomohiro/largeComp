import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1513Component } from './comp1513.component';

describe('Comp1513Component', () => {
  let component: Comp1513Component;
  let fixture: ComponentFixture<Comp1513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
