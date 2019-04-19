import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1563Component } from './comp1563.component';

describe('Comp1563Component', () => {
  let component: Comp1563Component;
  let fixture: ComponentFixture<Comp1563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
