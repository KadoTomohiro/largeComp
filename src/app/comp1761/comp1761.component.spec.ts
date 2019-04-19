import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1761Component } from './comp1761.component';

describe('Comp1761Component', () => {
  let component: Comp1761Component;
  let fixture: ComponentFixture<Comp1761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
