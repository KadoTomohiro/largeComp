import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1973Component } from './comp1973.component';

describe('Comp1973Component', () => {
  let component: Comp1973Component;
  let fixture: ComponentFixture<Comp1973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
