import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1638Component } from './comp1638.component';

describe('Comp1638Component', () => {
  let component: Comp1638Component;
  let fixture: ComponentFixture<Comp1638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
