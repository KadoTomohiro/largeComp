import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1292Component } from './comp1292.component';

describe('Comp1292Component', () => {
  let component: Comp1292Component;
  let fixture: ComponentFixture<Comp1292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
