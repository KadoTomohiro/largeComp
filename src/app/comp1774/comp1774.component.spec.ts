import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1774Component } from './comp1774.component';

describe('Comp1774Component', () => {
  let component: Comp1774Component;
  let fixture: ComponentFixture<Comp1774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
