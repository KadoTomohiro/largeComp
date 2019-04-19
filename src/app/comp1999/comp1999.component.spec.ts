import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1999Component } from './comp1999.component';

describe('Comp1999Component', () => {
  let component: Comp1999Component;
  let fixture: ComponentFixture<Comp1999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
