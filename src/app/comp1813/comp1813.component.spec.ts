import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1813Component } from './comp1813.component';

describe('Comp1813Component', () => {
  let component: Comp1813Component;
  let fixture: ComponentFixture<Comp1813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
