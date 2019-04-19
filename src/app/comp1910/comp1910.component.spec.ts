import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1910Component } from './comp1910.component';

describe('Comp1910Component', () => {
  let component: Comp1910Component;
  let fixture: ComponentFixture<Comp1910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
