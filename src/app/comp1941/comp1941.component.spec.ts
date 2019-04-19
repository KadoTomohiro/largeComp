import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1941Component } from './comp1941.component';

describe('Comp1941Component', () => {
  let component: Comp1941Component;
  let fixture: ComponentFixture<Comp1941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
