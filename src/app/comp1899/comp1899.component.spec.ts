import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1899Component } from './comp1899.component';

describe('Comp1899Component', () => {
  let component: Comp1899Component;
  let fixture: ComponentFixture<Comp1899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
