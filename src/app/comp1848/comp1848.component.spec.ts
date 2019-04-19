import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1848Component } from './comp1848.component';

describe('Comp1848Component', () => {
  let component: Comp1848Component;
  let fixture: ComponentFixture<Comp1848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
