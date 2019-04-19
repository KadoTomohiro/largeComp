import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1535Component } from './comp1535.component';

describe('Comp1535Component', () => {
  let component: Comp1535Component;
  let fixture: ComponentFixture<Comp1535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
