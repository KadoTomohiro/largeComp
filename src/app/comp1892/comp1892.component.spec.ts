import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1892Component } from './comp1892.component';

describe('Comp1892Component', () => {
  let component: Comp1892Component;
  let fixture: ComponentFixture<Comp1892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
