import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1915Component } from './comp1915.component';

describe('Comp1915Component', () => {
  let component: Comp1915Component;
  let fixture: ComponentFixture<Comp1915Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1915Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
