import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1558Component } from './comp1558.component';

describe('Comp1558Component', () => {
  let component: Comp1558Component;
  let fixture: ComponentFixture<Comp1558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
