import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1865Component } from './comp1865.component';

describe('Comp1865Component', () => {
  let component: Comp1865Component;
  let fixture: ComponentFixture<Comp1865Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1865Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1865Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
