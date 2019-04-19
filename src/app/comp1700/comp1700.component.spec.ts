import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1700Component } from './comp1700.component';

describe('Comp1700Component', () => {
  let component: Comp1700Component;
  let fixture: ComponentFixture<Comp1700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
