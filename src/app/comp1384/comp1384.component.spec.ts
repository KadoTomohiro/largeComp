import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1384Component } from './comp1384.component';

describe('Comp1384Component', () => {
  let component: Comp1384Component;
  let fixture: ComponentFixture<Comp1384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
