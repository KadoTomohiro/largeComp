import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp537Component } from './comp537.component';

describe('Comp537Component', () => {
  let component: Comp537Component;
  let fixture: ComponentFixture<Comp537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
