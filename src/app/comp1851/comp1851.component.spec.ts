import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1851Component } from './comp1851.component';

describe('Comp1851Component', () => {
  let component: Comp1851Component;
  let fixture: ComponentFixture<Comp1851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
