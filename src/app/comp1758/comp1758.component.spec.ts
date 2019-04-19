import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1758Component } from './comp1758.component';

describe('Comp1758Component', () => {
  let component: Comp1758Component;
  let fixture: ComponentFixture<Comp1758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
