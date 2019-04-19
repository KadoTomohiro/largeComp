import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1782Component } from './comp1782.component';

describe('Comp1782Component', () => {
  let component: Comp1782Component;
  let fixture: ComponentFixture<Comp1782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
