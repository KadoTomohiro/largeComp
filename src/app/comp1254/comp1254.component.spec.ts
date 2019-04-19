import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1254Component } from './comp1254.component';

describe('Comp1254Component', () => {
  let component: Comp1254Component;
  let fixture: ComponentFixture<Comp1254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
