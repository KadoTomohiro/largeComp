import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1920Component } from './comp1920.component';

describe('Comp1920Component', () => {
  let component: Comp1920Component;
  let fixture: ComponentFixture<Comp1920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
