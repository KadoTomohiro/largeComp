import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1995Component } from './comp1995.component';

describe('Comp1995Component', () => {
  let component: Comp1995Component;
  let fixture: ComponentFixture<Comp1995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
