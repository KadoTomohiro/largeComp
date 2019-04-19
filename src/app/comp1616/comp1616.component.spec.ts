import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1616Component } from './comp1616.component';

describe('Comp1616Component', () => {
  let component: Comp1616Component;
  let fixture: ComponentFixture<Comp1616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
