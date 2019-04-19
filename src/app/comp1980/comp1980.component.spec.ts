import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1980Component } from './comp1980.component';

describe('Comp1980Component', () => {
  let component: Comp1980Component;
  let fixture: ComponentFixture<Comp1980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
