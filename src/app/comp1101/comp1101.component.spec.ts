import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1101Component } from './comp1101.component';

describe('Comp1101Component', () => {
  let component: Comp1101Component;
  let fixture: ComponentFixture<Comp1101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
