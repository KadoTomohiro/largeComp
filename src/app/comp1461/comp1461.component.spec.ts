import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1461Component } from './comp1461.component';

describe('Comp1461Component', () => {
  let component: Comp1461Component;
  let fixture: ComponentFixture<Comp1461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
