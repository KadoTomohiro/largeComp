import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1859Component } from './comp1859.component';

describe('Comp1859Component', () => {
  let component: Comp1859Component;
  let fixture: ComponentFixture<Comp1859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
